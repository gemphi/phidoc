import fs from 'fs';
import path from 'path';
import fg from 'fast-glob';
import matter from 'gray-matter';
import type {
  PhiDocBlogPost,
  PhiDocContentItem,
  PhiDocData,
  PhiDocSidebarConfig,
  PhiDocSidebarSection,
  PhiDocSiteConfig,
} from './types';

export const PHIDOC_VIRTUAL_ID = 'virtual:phidoc/content';

export type PhiDocPluginOptions = PhiDocSiteConfig;

export interface PhiDocPlugin {
  name: string;
  enforce: 'pre';
  configResolved: (config: { root: string; command?: string }) => void;
  resolveId: (id: string) => string | undefined;
  load: (id: string) => Promise<string | undefined>;
}

export interface DocFrontmatter {
  id?: string;
  title?: string;
  description?: string;
  category?: string;
  badge?: string;
  summary?: string;
  citations?: string[];
  date?: string;
  author?: string;
  tags?: string[];
  sidebar_position?: number;
  sidebarPosition?: number;
  sidebar_label?: string;
  sidebarLabel?: string;
  sidebar_hidden?: boolean;
  hidden?: boolean;
  draft?: boolean;
  slug?: string;
}

type CategoryMetadata = {
  label?: string;
  position?: number;
  collapsed?: boolean;
};

type CollectionKind = 'docs' | 'blog';

type CollectionConfig = {
  path: string;
  routeBasePath: string;
  include: string[];
  exclude: string[];
};

type CollectionResult = {
  items: PhiDocContentItem[];
  blogItems: PhiDocBlogPost[];
  sidebars: PhiDocSidebarSection[];
};

function normalizeSlashes(value: string): string {
  return value.replace(/\\/g, '/');
}

function normalizeRouteBase(value: string): string {
  return value.replace(/^\/+|\/+$/g, '');
}

function stripOrderPrefix(value: string): string {
  return value.replace(/^\d+[-_.]/, '');
}

function titleCase(value: string): string {
  return stripOrderPrefix(value)
    .replace(/[-_]+/g, ' ')
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function defaultSlug(relativeFile: string, routeBasePath: string): string {
  const segments = normalizeSlashes(relativeFile)
    .replace(/\.(md|mdx)$/i, '')
    .split('/')
    .map(stripOrderPrefix)
    .filter(Boolean);

  if (segments[segments.length - 1]?.toLowerCase() === 'index') segments.pop();
  return `/${[routeBasePath, ...segments].filter(Boolean).join('/')}`;
}

function normalizeSlug(slug: string, routeBasePath: string): string {
  if (slug.startsWith('/')) return slug;
  return `/${[routeBasePath, slug].filter(Boolean).join('/')}`;
}

function extractTitle(content: string, fallback: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match?.[1]?.trim() || titleCase(fallback);
}

function extractSummary(content: string): string {
  const paragraph = content
    .split(/\n\s*\n/)
    .map((block) => block.trim())
    .find((block) => block && !block.startsWith('#') && !block.startsWith('```') && !block.startsWith('---'));

  return paragraph ? paragraph.replace(/\s+/g, ' ').slice(0, 240) : '';
}

function filenamePosition(relativeFile: string): number {
  const match = path.basename(relativeFile).match(/^(\d+)[-_.]/);
  return match ? Number(match[1]) : 9999;
}

async function loadCategoryMetadata(contentDir: string): Promise<Map<string, CategoryMetadata>> {
  const metadataFiles = await fg(['**/_category_.json'], { cwd: contentDir, dot: false });
  const metadata = new Map<string, CategoryMetadata>();

  for (const file of metadataFiles) {
    const absolutePath = path.join(contentDir, file);
    const directory = normalizeSlashes(path.dirname(file));
    try {
      metadata.set(directory, JSON.parse(fs.readFileSync(absolutePath, 'utf8')) as CategoryMetadata);
    } catch {
      metadata.set(directory, {});
    }
  }

  return metadata;
}

function buildSidebars(
  items: PhiDocContentItem[],
  sections: PhiDocSidebarSection[] | undefined,
  categoryMetadata: Map<string, CategoryMetadata>
): PhiDocSidebarSection[] {
  if (sections?.length) return sections;

  const categoryOrder = new Map<string, number>();
  for (const metadata of categoryMetadata.values()) {
    if (metadata.label && typeof metadata.position === 'number') categoryOrder.set(metadata.label, metadata.position);
  }

  const grouped = new Map<string, PhiDocContentItem[]>();
  for (const item of items) {
    if (item.hidden || item.draft) continue;
    grouped.set(item.category, [...(grouped.get(item.category) || []), item]);
  }

  return [...grouped.entries()]
    .map(([title, categoryItems]) => ({
      title,
      items: categoryItems.map(({ id, title: itemTitle, slug, category, position }) => ({ id, title: itemTitle, slug, category, position })),
    }))
    .sort((a, b) => (categoryOrder.get(a.title) || 9999) - (categoryOrder.get(b.title) || 9999) || a.title.localeCompare(b.title));
}

function normalizeCollectionConfig(config: PhiDocSiteConfig['docs'], pathFallback: string, routeFallback: string): CollectionConfig {
  return {
    path: config?.path || pathFallback,
    routeBasePath: normalizeRouteBase(config?.routeBasePath || routeFallback),
    include: config?.include || ['**/*.md', '**/*.mdx'],
    exclude: config?.exclude || ['**/node_modules/**', '**/.git/**', '**/_*/**'],
  };
}

export default function phidocVite(options: PhiDocPluginOptions): PhiDocPlugin {
  const RESOLVED_ID = '\0' + PHIDOC_VIRTUAL_ID;
  const config: PhiDocSiteConfig = {
    ...options,
    docs: normalizeCollectionConfig(options.docs, 'docs', 'docs'),
    blog: normalizeCollectionConfig(options.blog, 'blog', 'blog'),
    sidebar: { mode: options.sidebar?.mode || 'auto', sections: options.sidebar?.sections },
    blogSidebar: { mode: options.blogSidebar?.mode || 'auto', sections: options.blogSidebar?.sections },
  };

  let command = 'serve';
  let root = process.cwd();

  async function loadCollection(kind: CollectionKind): Promise<CollectionResult> {
    const collection = (kind === 'docs' ? config.docs : config.blog) as CollectionConfig;
    const sidebarConfig = (kind === 'docs' ? config.sidebar : config.blogSidebar) as PhiDocSidebarConfig;
    const contentDir = path.isAbsolute(collection.path) ? collection.path : path.join(root, collection.path);
    if (!fs.existsSync(contentDir)) {
      return { items: [], blogItems: [], sidebars: sidebarConfig.sections || [] };
    }
    const entries = await fg(collection.include, { cwd: contentDir, ignore: collection.exclude, dot: false });
    const categoryMetadata = await loadCategoryMetadata(contentDir);

    const items = entries
      .map((relativeFile: string): PhiDocContentItem | undefined => {
        const normalizedFile = normalizeSlashes(relativeFile);
        const absolutePath = path.join(contentDir, relativeFile);
        const raw = fs.readFileSync(absolutePath, 'utf8');
        const { data, content } = matter(raw);
        const fm = (data || {}) as DocFrontmatter;
        const directory = normalizeSlashes(path.dirname(normalizedFile));
        const topDirectory = normalizedFile.includes('/') ? normalizedFile.split('/')[0] : '.';
        const categoryInfo = categoryMetadata.get(directory) || categoryMetadata.get(topDirectory) || categoryMetadata.get('.');
        const slug = fm.slug ? normalizeSlug(fm.slug, collection.routeBasePath) : defaultSlug(normalizedFile, collection.routeBasePath);
        const id = fm.id || slug.replace(/^\/+|\/+$/g, '').replace(/\//g, '-');
        const title = fm.title || extractTitle(content, path.basename(relativeFile, path.extname(relativeFile)));
        const category = fm.category || categoryInfo?.label || (topDirectory === '.' ? 'General' : titleCase(topDirectory));
        const position = fm.sidebar_position ?? fm.sidebarPosition ?? filenamePosition(normalizedFile);
        const draft = Boolean(fm.draft);

        if (draft && command === 'build') return undefined;

        const item: PhiDocContentItem = {
          id,
          slug,
          title,
          category,
          badge: fm.badge || category,
          summary: fm.summary || fm.description || extractSummary(content),
          citations: Array.isArray(fm.citations) ? fm.citations : [],
          position,
          hidden: Boolean(fm.hidden || fm.sidebar_hidden),
          draft,
          content,
        };

        if (kind === 'blog') {
          (item as PhiDocBlogPost).date = fm.date;
          (item as PhiDocBlogPost).author = fm.author;
          (item as PhiDocBlogPost).tags = Array.isArray(fm.tags) ? fm.tags : [];
        }

        return item;
      })
      .filter((item): item is PhiDocContentItem => Boolean(item));

    items.sort((a, b) => a.category.localeCompare(b.category) || (a.position || 9999) - (b.position || 9999) || a.title.localeCompare(b.title));

    return {
      items: kind === 'docs' ? items : [],
      blogItems: kind === 'blog' ? items as PhiDocBlogPost[] : [],
      sidebars: buildSidebars(items, sidebarConfig.mode === 'manual' ? sidebarConfig.sections : undefined, categoryMetadata),
    };
  }

  return {
    name: 'phidoc-vite',
    enforce: 'pre',

    configResolved(cfg: { root: string; command?: string }) {
      command = cfg.command || 'serve';
      root = cfg.root;
    },

    resolveId(id: string) {
      if (id === PHIDOC_VIRTUAL_ID) return RESOLVED_ID;
      return undefined;
    },

    async load(id: string) {
      if (id !== RESOLVED_ID) return undefined;

      const docs = await loadCollection('docs');
      const blog = await loadCollection('blog');
      const data: PhiDocData = {
        config,
        items: docs.items,
        sidebars: docs.sidebars,
        blogItems: blog.blogItems,
        blogSidebars: blog.sidebars,
      };

      return `export default ${JSON.stringify(data, null, 2)};`;
    },
  };
}
