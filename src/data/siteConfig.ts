/**
 * PhiDoc site configuration — local data, no external reliance.
 *
 * PhiDoc is self-contained — no Docusaurus internals.
 * All site metadata lives here as plain data.
 */

export interface SiteConfig {
  title: string;
  tagline: string;
  url: string;
  baseUrl: string;
  favicon: string;
  defaultBrandId: string;
}

export const SITE_CONFIG: SiteConfig = {
  title: 'PhiDoc',
  tagline: 'Unified documentation for the gemphi workspace',
  url: 'https://phidoc.dev',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  defaultBrandId: 'edx',
};
