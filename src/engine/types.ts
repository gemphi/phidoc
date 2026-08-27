import type { BlogPost, DocGuide } from '@phiace/puijs';

export type PhiDocContentItem = DocGuide;
export type PhiDocBlogPost = BlogPost;

export type PhiDocNavItem = {
  label: string;
  href: string;
  external?: boolean;
};

export type PhiDocAction = {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary' | 'outline';
  external?: boolean;
};

export type PhiDocHomeFeature = {
  title: string;
  description: string;
  icon?: string;
  href?: string;
};

export type PhiDocHomeConfig = {
  title?: string;
  tagline?: string;
  actions?: PhiDocAction[];
  features?: PhiDocHomeFeature[];
};

export type PhiDocSidebarItem = {
  id: string;
  title: string;
  slug: string;
  category: string;
  position?: number;
};

export type PhiDocSidebarSection = {
  title: string;
  collapsed?: boolean;
  items: PhiDocSidebarItem[];
};

export type PhiDocSidebarConfig = {
  mode?: 'auto' | 'manual';
  sections?: PhiDocSidebarSection[];
};

export type PhiDocContentConfig = {
  path?: string;
  routeBasePath?: string;
  include?: string[];
  exclude?: string[];
};

export type PhiDocDocsConfig = PhiDocContentConfig;
export type PhiDocBlogConfig = PhiDocContentConfig;

export type PhiDocLayoutPreset = {
  navbarVariant?: 'default' | 'transparent' | 'solid';
  navbarSticky?: boolean;
  sidebarCollapsed?: boolean;
};

export type PhiDocSiteConfig = {
  title: string;
  description?: string;
  version?: string;
  brandId: string;
  docs?: PhiDocDocsConfig;
  blog?: PhiDocBlogConfig;
  home?: PhiDocHomeConfig;
  nav?: PhiDocNavItem[];
  sidebar?: PhiDocSidebarConfig;
  blogSidebar?: PhiDocSidebarConfig;
  layout?: PhiDocLayoutPreset;
};

export type PhiDocData = {
  config: PhiDocSiteConfig;
  items: PhiDocContentItem[];
  sidebars: PhiDocSidebarSection[];
  blogItems: PhiDocBlogPost[];
  blogSidebars: PhiDocSidebarSection[];
};
