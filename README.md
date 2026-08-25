# PhiDoc

Unified documentation portal for the gemphi workspace - covering [Phi](https://github.com/gemphi/phi) (Rust + Apple SDKs + ML) and [Phixum](https://github.com/gemphi/phixum) (Rust options trading engine).

## Quick Start

```bash
npm install
npm start
```

This opens the dev server at `http://localhost:3000`.

## Build

```bash
npm run build
```

Outputs static files to `build/` - deploy to any static host (Vercel, Netlify, GitHub Pages).

## Structure

```
phidoc/
├── docusaurus.config.ts   # Site configuration
├── sidebars.ts            # Sidebar navigation
├── docs/                  # Documentation content
│   ├── phi/               # Phi workspace docs
│   │   ├── intro.md
│   │   ├── crates/        # Crate-level docs
│   │   ├── sdk/           # Apple SDK reference
│   │   └── architecture/  # Architecture docs
│   ├── phixum/            # Phixum trading engine docs
│   │   ├── intro.md
│   │   ├── architecture/  # Architecture & concurrency
│   │   ├── crates/        # Crate-level docs
│   │   ├── flows/         # Operational flow docs
│   │   └── infra/         # Infrastructure & CI/CD
│   └── shared/            # Cross-workspace standards
├── src/
│   ├── pages/             # React landing page
│   └── css/               # Custom theme styles (SCSS modules)
├── static/                # Static assets (logo, favicon)
├── package.json
└── tsconfig.json
```

## Tech Stack

- **Docusaurus 3** - React-based static site generator
- **TypeScript** - Type-safe config and components
- **PUI.js** - Design token system (`@phiace/puijs`)
- **Sass/SCSS** - Modular stylesheets using puijs tokens
- **Prism** - Syntax highlighting (Rust, TOML, Bash, JSON, YAML)
- **MDX** - Markdown with React components

## Adding Documentation

1. Create a `.md` file under `docs/phi/`, `docs/phixum/`, or `docs/shared/`
2. Add the doc ID to `sidebars.ts`
3. Run `npm start` to preview

## License

MIT
