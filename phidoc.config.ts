import { definePhiDocConfig } from './src/engine/config';

export default definePhiDocConfig({
  title: 'PhiDoc',
  description: 'Configuration-driven documentation sites for the GemPhi ecosystem.',
  version: 'v0.1.0',
  brandId: 'phidoc',
  docs: {
    path: 'docs',
    routeBasePath: 'docs',
    include: ['**/*.md', '**/*.mdx'],
    exclude: ['**/node_modules/**', '**/.git/**', '**/_*/**'],
  },
  home: {
    title: 'PhiDoc',
    tagline: 'Automated, theme-driven documentation sites powered by puijs.',
    actions: [
      { label: 'Read the PhiDoc guide', href: '/docs/phidoc/quickstart', variant: 'primary' },
      { label: 'Explore GemPhi docs', href: '/docs/shared/diem-standards', variant: 'outline' },
    ],
    features: [
      {
        title: 'Configuration First',
        description: 'Define the site, content path, landing page, navigation, and sidebar mode in one typed config.',
        icon: 'settings',
        href: '/docs/phidoc/configuration',
      },
      {
        title: 'Markdown Automation',
        description: 'Scan Markdown and MDX files, parse frontmatter, infer slugs, and exclude drafts automatically.',
        icon: 'code',
        href: '/docs/phidoc/content-model',
      },
      {
        title: 'Generated Sidebars',
        description: 'Build navigation from the filesystem, number prefixes, category metadata, and frontmatter order.',
        icon: 'grid',
        href: '/docs/phidoc/sidebars',
      },
      {
        title: 'puijs Themes',
        description: 'Use puijs brand themes, dark mode, spacing, and components without application CSS.',
        icon: 'palette',
        href: '/docs/phidoc/branding',
      },
      {
        title: 'Reusable Sites',
        description: 'Point any phi* project at its docs directory and reuse the same production docs shell.',
        icon: 'layers',
        href: '/docs/phidoc/site-integration',
      },
      {
        title: 'Vite Runtime',
        description: 'Ship a fast React documentation app through a small Vite plugin and virtual content module.',
        icon: 'rocket',
        href: '/docs/phidoc/deployment',
      },
    ],
  },
  nav: [
    { label: 'Docs', href: '/docs/phidoc/quickstart' },
    { label: 'GitHub', href: 'https://github.com/gemphi/phidoc', external: true },
  ],
  sidebar: {
    mode: 'auto',
  },
  layout: {
    navbarVariant: 'default',
    navbarSticky: true,
    sidebarCollapsed: false,
  },
});
