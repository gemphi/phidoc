---
id: phidoc-site-integration
title: Add PhiDoc to Any Site
description: Reuse PhiDoc across phi* projects with a config, Markdown directory, Vite plugin, and one render call.
sidebar_position: 6
slug: /docs/phidoc/site-integration
---

# Add PhiDoc to Any Site

Every site follows the same four-step setup.

## 1. Add dependencies

```bash
npm install @phiace/phidoc @phiace/puijs
```

## 2. Create `phidoc.config.ts`

```ts
import { definePhiDocConfig } from '@phiace/phidoc';

export default definePhiDocConfig({
  title: 'Phiano',
  description: 'Phiano documentation.',
  brandId: 'phiano',
  docs: {
    path: 'docs',
    routeBasePath: 'docs',
  },
  sidebar: {
    mode: 'auto',
  },
});
```

## 3. Register the Vite plugin

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import phidoc from '@phiace/phidoc/vite';
import siteConfig from './phidoc.config';

export default defineConfig({
  plugins: [react(), phidoc(siteConfig)],
});
```

## 4. Render the site

```tsx
import docsData from 'virtual:phidoc/content';
import { PhiDocSite } from '@phiace/phidoc';
import '@phiace/puijs/styles';

export function App() {
  return <PhiDocSite data={docsData} />;
}
```

No project should recreate navbar, sidebar, article, landing-page, theme, or routing code. Project-specific information belongs in the config and Markdown files.
