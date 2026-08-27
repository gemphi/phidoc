---
id: phidoc-configuration
title: Configuration
description: Configure the PhiDoc site shell, content source, landing page, navigation, and layout.
sidebar_position: 2
slug: /docs/phidoc/configuration
---

# Configuration

PhiDoc uses one serializable site configuration. The config is the equivalent of a Docusaurus site config, a VitePress theme config, and a Starlight sidebar config.

## Site metadata

```ts
export default definePhiDocConfig({
  title: 'Phixum',
  description: 'Rust-native options trading engine.',
  version: 'v0.1.0',
  brandId: 'phixum',
});
```

## Docs source

```ts
docs: {
  path: 'docs',
  routeBasePath: 'docs',
  include: ['**/*.md', '**/*.mdx'],
  exclude: ['**/_*/**', '**/drafts/**'],
}
```

- **path** sets the content directory.
- **routeBasePath** sets the URL prefix.
- **include** and **exclude** control the file glob.
- Number-prefixed filenames such as `01-intro.md` control order without appearing in URLs.

## Landing page

```ts
home: {
  title: 'Phixum',
  tagline: 'Production-grade options infrastructure.',
  actions: [
    { label: 'Read docs', href: '/docs/intro', variant: 'primary' },
  ],
  features: [
    {
      title: 'Architecture',
      description: 'Engine boundaries and runtime invariants.',
      icon: 'layers',
      href: '/docs/architecture',
    },
  ],
}
```

When features are omitted, PhiDoc derives landing cards from the generated sidebar categories.

## Navigation

```ts
nav: [
  { label: 'Docs', href: '/docs/intro' },
  { label: 'GitHub', href: 'https://github.com/example/project', external: true },
]
```

Navigation is rendered by puijs. Sites do not create a custom navbar.
