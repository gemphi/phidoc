---
id: phidoc-quickstart
title: PhiDoc Quickstart
description: Create a configuration-driven documentation site with PhiDoc, Vite, and puijs.
sidebar_position: 1
slug: /docs/phidoc/quickstart
---

# PhiDoc Quickstart

PhiDoc is a standalone documentation engine that turns a typed configuration and a directory of Markdown files into a complete puijs-powered site.

## Install

```bash
npm install @phiace/phidoc @phiace/puijs react react-dom
npm install -D vite @vitejs/plugin-react typescript sass
```

## Create the site config

Create `phidoc.config.ts` and define the site, content path, landing page, navigation, and sidebar mode.

```ts
import { definePhiDocConfig } from '@phiace/phidoc';

export default definePhiDocConfig({
  title: 'My Project',
  description: 'Project documentation.',
  brandId: 'phidoc',
  docs: {
    path: 'docs',
    routeBasePath: 'docs',
  },
  sidebar: {
    mode: 'auto',
  },
});
```

## Add the Vite plugin

```ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import phidoc from '@phiace/phidoc/vite';
import siteConfig from './phidoc.config';

export default defineConfig({
  plugins: [react(), phidoc(siteConfig)],
});
```

## Render the generated site

```tsx
import docsData from 'virtual:phidoc/content';
import { PhiDocSite } from '@phiace/phidoc';
import '@phiace/puijs/styles';

export function App() {
  return <PhiDocSite data={docsData} />;
}
```

PhiDoc derives the home page, document routes, sidebar sections, active document, previous/next links, and theme from this contract.
