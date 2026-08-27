---
id: phidoc-sidebars
title: Sidebars
description: Generate sidebars from the filesystem or provide manual sections.
sidebar_position: 4
slug: /docs/phidoc/sidebars
---

# Sidebars

PhiDoc follows the Docusaurus and Starlight convention: the docs directory mirrors the navigation tree.

## Automatic sidebars

```ts
sidebar: {
  mode: 'auto',
}
```

A directory becomes a section. Each Markdown file becomes a link. Numeric prefixes order files without leaking into route URLs.

```text
docs/
  00-quickstart.md
  concepts/
    01-pricing.md
    02-risk.md
```

## Category metadata

Add `_category_.json` to control a directory label and section position.

```json
{
  "label": "Core Concepts",
  "position": 2,
  "collapsed": false
}
```

## Manual sidebars

Use manual mode when the route order must differ from the filesystem.

```ts
sidebar: {
  mode: 'manual',
  sections: [
    {
      title: 'Start Here',
      items: [
        {
          id: 'docs-quickstart',
          title: 'Quickstart',
          slug: '/docs/quickstart',
          category: 'Start Here',
          position: 1,
        },
      ],
    },
  ],
}
```

The generated sidebar model also controls previous and next navigation in `DocsPortal`.
