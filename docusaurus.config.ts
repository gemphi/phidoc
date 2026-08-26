import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'PhiDoc',
  tagline: 'Unified documentation for the gemphi workspace',
  favicon: 'img/favicon.ico',

  url: 'https://gemphi.dev',
  baseUrl: '/',

  onBrokenLinks: 'warn',
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
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: ['docusaurus-plugin-sass'],

  themeConfig: {
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
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/gemphi',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} gemphi. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['rust', 'toml', 'bash', 'json', 'yaml', 'python'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
