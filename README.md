# PhiDoc

PhiDoc is a standalone, configuration-driven documentation engine for the GemPhi workspace. It uses puijs for every layout, navigation, typography, card, theme, and responsive behavior.

## Run this site

```bash
npm install
npm run dev
```

The development server runs at `http://127.0.0.1:5174`.

## Build

```bash
npm run build
npm run preview
```

The production output is written to `dist/` and can be deployed by any static host with SPA path rewrites.

## Architecture

```
phidoc/
├── phidoc.config.ts       # Site metadata, docs path, landing page, nav, sidebar mode
├── vite.config.ts         # Vite + React + PhiDoc content plugin
├── docs/                  # Markdown and MDX content
│   ├── phidoc/            # PhiDoc engine documentation
│   ├── phi/               # Phi workspace docs
│   ├── phixum/            # Phixum docs
│   └── shared/            # Shared standards
└── src/
    ├── engine/            # Standalone PhiDoc engine and Vite plugin
    └── main.tsx           # Virtual content module -> PhiDocSite
```

## Add documentation

1. Add a Markdown file under `docs/`.
2. Use the directory name for the sidebar category.
3. Add frontmatter only when the route, title, order, visibility, or summary needs explicit control.
4. Run `npm run dev`; no sidebar file or page component is required.

## Use PhiDoc in any site

```ts
// phidoc.config.ts
import { definePhiDocConfig } from '@phiace/phidoc';

export default definePhiDocConfig({
  title: 'Phixum',
  description: 'Phixum documentation.',
  brandId: 'phixum',
  docs: {
    path: 'docs',
    routeBasePath: 'docs',
  },
  sidebar: {
    mode: 'auto',
  },
});
```

```ts
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import phidoc from '@phiace/phidoc/vite';
import siteConfig from './phidoc.config';

export default defineConfig({
  plugins: [react(), phidoc(siteConfig)],
});
```

```tsx
// src/main.tsx
import docsData from 'virtual:phidoc/content';
import { PhiDocSite } from '@phiace/phidoc';
import '@phiace/puijs/styles';

export function App() {
  return <PhiDocSite data={docsData} />;
}
```

PhiDoc generates the landing page, content routes, sidebars, previous/next links, active document state, and puijs theme from the config and content tree.

## License

MIT
