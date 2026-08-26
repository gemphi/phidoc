import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import {BRAND_THEME_DATA} from './brandData';

const config: Config = {
  title: 'PhiDoc',
  tagline: 'Unified documentation for the gemphi workspace',
  favicon: 'img/favicon.ico',

  url: 'https://phidoc.dev',
  baseUrl: '/',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  headTags: [
    { tagName: 'meta', attributes: { name: 'description', content: 'Unified documentation for the gemphi workspace — powered by puijs with 16 brand themes.' } },
    { tagName: 'meta', attributes: { property: 'og:title', content: 'PhiDoc' } },
    { tagName: 'meta', attributes: { property: 'og:description', content: 'Unified documentation for the gemphi workspace' } },
    { tagName: 'meta', attributes: { property: 'og:url', content: 'https://phidoc.dev' } },
    { tagName: 'meta', attributes: { property: 'og:type', content: 'website' } },
    { tagName: 'meta', attributes: { name: 'twitter:card', content: 'summary_large_image' } },
    { tagName: 'meta', attributes: { name: 'twitter:title', content: 'PhiDoc' } },
    { tagName: 'meta', attributes: { name: 'twitter:description', content: 'Unified documentation for the gemphi workspace' } },
  ],
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/gemphi/phidoc/edit/main/',
          sidebarCollapsed: true,
          sidebarCollapsible: true,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    'docusaurus-plugin-sass',
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    metadata: [
      { name: 'description', content: 'Unified documentation for the gemphi workspace — powered by puijs with 16 brand themes.' },
    ],
    navbar: {
      title: 'PhiDoc',
      logo: {
        alt: 'PhiDoc Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'phiSidebar',
          position: 'left',
          label: 'Phi',
        },
        {
          type: 'docSidebar',
          sidebarId: 'phixumSidebar',
          position: 'left',
          label: 'Phixum',
        },
        {
          type: 'docSidebar',
          sidebarId: 'sharedSidebar',
          position: 'left',
          label: 'Shared',
        },
        {
          type: 'dropdown',
          label: 'Brand Theme',
          position: 'right',
          items: BRAND_THEME_DATA.map((brand) => ({
            label: brand.name,
            href: `/?brand=${brand.id}`,
          })),
        },
        {
          href: 'https://github.com/gemphi',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Projects',
          items: [
            {
              label: 'Phi',
              to: '/docs/phi/intro',
            },
            {
              label: 'Phixum',
              to: '/docs/phixum/intro',
            },
            {
              label: 'Shared Standards',
              to: '/docs/shared/intro',
            },
          ],
        },
        {
          title: 'Ecosystem',
          items: [
            {
              label: 'PUI.js Design System',
              to: '/docs/shared/diem-standards',
            },
            {
              label: 'Paragon 16 Brands',
              to: '/docs/shared/readme-format',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/gemphi',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GemPhi. Powered by PUI.js with 16 Paragon Brands.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['rust', 'toml', 'bash', 'json', 'yaml', 'python'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
