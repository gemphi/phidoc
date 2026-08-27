---
id: phidoc-deployment
title: Build and Deployment
description: Build a PhiDoc site with Vite and serve it as a static single-page application.
sidebar_position: 7
slug: /docs/phidoc/deployment
---

# Build and Deployment

PhiDoc uses Vite for development and production builds.

## Scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc --noEmit && vite build",
    "preview": "vite preview"
  }
}
```

## Production behavior

- Markdown content is loaded through the PhiDoc Vite plugin.
- Draft documents are excluded from production content.
- Hidden documents remain addressable but stay out of navigation.
- Routes are handled by the browser history runtime.
- Static hosts should rewrite unknown paths to `index.html`.

## Verification

```bash
npm run typecheck
npm run build
npm run preview
```

The resulting `dist` directory can be deployed to any static host.
