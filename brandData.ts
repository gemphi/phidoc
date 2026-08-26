/**
 * Standalone brand data for PhiDoc config files.
 *
 * This file contains the same 16 brand themes as puijs BRAND_THEMES
 * but has zero React/TypeScript dependencies, so it can be imported
 * in docusaurus.config.ts (which runs in Node via jiti).
 *
 * Source of truth: @phiace/puijs/src/providers/themes.ts
 */

export interface BrandThemeData {
  id: string;
  name: string;
  gradient: string;
  gradientDark: string;
}

export const BRAND_THEME_DATA: BrandThemeData[] = [
  { id: 'edx', name: 'edX Paragon', gradient: 'linear-gradient(135deg, #00262b 0%, #007382 100%)', gradientDark: 'linear-gradient(135deg, #00262b 0%, #001518 100%)' },
  { id: 'phiano', name: 'Phiano Phase', gradient: 'linear-gradient(135deg, #8b5cf6 0%, #d946ef 100%)', gradientDark: 'linear-gradient(135deg, #8b5cf6 0%, #4c1d95 100%)' },
  { id: 'phixum', name: 'Phixum Options', gradient: 'linear-gradient(135deg, #0284c7 0%, #38bdf8 100%)', gradientDark: 'linear-gradient(135deg, #0284c7 0%, #082f49 100%)' },
  { id: 'foundry', name: 'Palantir Foundry', gradient: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)', gradientDark: 'linear-gradient(135deg, #3b82f6 0%, #1e3a8a 100%)' },
  { id: 'blueprint', name: 'Blueprint Slate', gradient: 'linear-gradient(135deg, #2d72d2 0%, #106ba3 100%)', gradientDark: 'linear-gradient(135deg, #2d72d2 0%, #182026 100%)' },
  { id: 'emerald', name: 'Emerald Foundry', gradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)', gradientDark: 'linear-gradient(135deg, #10b981 0%, #065f46 100%)' },
  { id: 'midnight', name: 'Midnight Indigo', gradient: 'linear-gradient(135deg, #4f46e5 0%, #6366f1 100%)', gradientDark: 'linear-gradient(135deg, #4f46e5 0%, #312e81 100%)' },
  { id: 'amber', name: 'Amber Gold', gradient: 'linear-gradient(135deg, #d97706 0%, #fbbf24 100%)', gradientDark: 'linear-gradient(135deg, #d97706 0%, #78350f 100%)' },
  { id: 'sapphire', name: 'Sapphire Deep', gradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)', gradientDark: 'linear-gradient(135deg, #2563eb 0%, #172554 100%)' },
  { id: 'crimson', name: 'Scarlet Crimson', gradient: 'linear-gradient(135deg, #e11d48 0%, #f43f5e 100%)', gradientDark: 'linear-gradient(135deg, #e11d48 0%, #881337 100%)' },
  { id: 'amethyst', name: 'Amethyst Mystic', gradient: 'linear-gradient(135deg, #9333ea 0%, #a855f7 100%)', gradientDark: 'linear-gradient(135deg, #9333ea 0%, #581c87 100%)' },
  { id: 'obsidian', name: 'Obsidian Pure', gradient: 'linear-gradient(135deg, #52525b 0%, #71717a 100%)', gradientDark: 'linear-gradient(135deg, #27272a 0%, #09090b 100%)' },
  { id: 'coral', name: 'Sunset Coral', gradient: 'linear-gradient(135deg, #f97316 0%, #fb923c 100%)', gradientDark: 'linear-gradient(135deg, #f97316 0%, #7c2d12 100%)' },
  { id: 'titanium', name: 'Titanium Platinum', gradient: 'linear-gradient(135deg, #64748b 0%, #94a3b8 100%)', gradientDark: 'linear-gradient(135deg, #64748b 0%, #1e293b 100%)' },
  { id: 'aurora', name: 'Aurora Borealis', gradient: 'linear-gradient(135deg, #14b8a6 0%, #2dd4bf 100%)', gradientDark: 'linear-gradient(135deg, #14b8a6 0%, #134e4a 100%)' },
  { id: 'zenith', name: 'Solar Zenith', gradient: 'linear-gradient(135deg, #eab308 0%, #facc15 100%)', gradientDark: 'linear-gradient(135deg, #eab308 0%, #713f12 100%)' },
];
