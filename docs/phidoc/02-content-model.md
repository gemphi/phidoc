---
id: phidoc-content-model
title: Content Model
description: Use Markdown files and frontmatter to define routes, titles, summaries, categories, and visibility.
sidebar_position: 3
slug: /docs/phidoc/content-model
---

# Content Model

PhiDoc treats the filesystem as the source of truth. Every Markdown or MDX file matched by the docs glob becomes a document.

## Frontmatter

```md
---
id: options-pricing
title: Options Pricing
description: Black-Scholes, Greeks, and volatility surfaces.
category: Concepts
badge: Quant
sidebar_position: 4
slug: /docs/concepts/options-pricing
citations:
  - Black, F. and Scholes, M. (1973)
---

# Options Pricing
```

## Supported fields

- **id** overrides the generated document ID.
- **title** overrides the first Markdown heading.
- **description** or **summary** feeds landing cards and article metadata.
- **category** overrides the directory-derived category.
- **badge** controls the article badge label.
- **sidebar_position** controls ordering inside a category.
- **slug** overrides the route.
- **hidden: true** keeps a route available but removes it from navigation.
- **draft: true** keeps the document in development and excludes it from production builds.
- **citations** renders academic or source references through the docs article UI.

## Defaults

PhiDoc infers missing values from the file path, first heading, first paragraph, and filename order. Frontmatter is optional for simple content and explicit when navigation needs control.
