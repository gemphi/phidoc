/**
 * Brand data registry — re-exports puijs BRAND_THEMES for use
 * across Docusaurus config, navbar, sidebars, and pages.
 *
 * PhiDoc is brand-driven: all 16 puijs brands are available
 * as documentation themes. No hardcoded sidebars or colors.
 */

import { BRAND_THEMES, BrandTheme } from '@phiace/puijs';

export { BRAND_THEMES, BrandTheme };

/** The default brand for PhiDoc (edX Paragon). */
export const DEFAULT_BRAND_ID = 'edx';

/** Brand sidebar entries — one per brand, data-driven. */
export const BRAND_SIDEBARS = BRAND_THEMES.map((brand) => ({
  id: brand.id,
  label: brand.name,
  gradient: brand.gradient,
}));

/** Navbar items generated from brands — no hardcoding. */
export const BRAND_NAV_ITEMS = BRAND_THEMES.slice(0, 6).map((brand) => ({
  type: 'docSidebar' as const,
  sidebarId: `${brand.id}Sidebar`,
  position: 'left' as const,
  label: brand.name,
}));

/** Gets a brand theme by ID, falling back to the default. */
export function getBrand(id: string): BrandTheme {
  return BRAND_THEMES.find((b) => b.id === id) || BRAND_THEMES[0];
}
