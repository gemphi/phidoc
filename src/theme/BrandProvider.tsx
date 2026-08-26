/**
 * BrandProvider — injects puijs brand theme CSS custom properties
 * into the document root. This replaces hardcoded CSS color values
 * with data-driven brand tokens from the 16 puijs brands.
 *
 * Usage: wrap any component with <BrandProvider brandId="edx">
 * and all --phi-color-* and --phi-gradient-* variables update.
 */

import React, { useEffect, useState, createContext, useContext } from 'react';
import { BRAND_THEMES, BrandTheme } from '@phiace/puijs';

const BrandContext = createContext<{ brandId: string; setBrandId: (id: string) => void }>({
  brandId: 'edx',
  setBrandId: () => {},
});

export function useBrand() {
  return useContext(BrandContext);
}

/** Converts a brand theme into CSS custom properties. */
function brandToCssVars(brand: BrandTheme, isDark: boolean): Record<string, string> {
  const c = brand.colors;
  const gradient = isDark ? brand.gradientDark : brand.gradient;

  return {
    '--phi-color-primary': c.primary,
    '--phi-color-primary-hover': c.primaryHover,
    '--phi-color-primary-light': c.primaryLight,
    '--phi-color-primary-dark': c.primaryLightDark,
    '--phi-color-secondary': c.secondary,
    '--phi-color-secondary-hover': c.secondaryHover,
    '--phi-brand-gradient': brand.gradient,
    '--phi-brand-gradient-dark': brand.gradientDark,
    '--phi-brand-active-gradient': gradient,
    '--phi-gradient-accent': `linear-gradient(to right, ${c.primaryLight} 0%, ${c.primaryLightDark} 100%)`,
    '--ifm-color-primary': c.primary,
    '--ifm-color-primary-dark': c.primaryHover,
    '--ifm-color-primary-darker': c.primaryLightDark,
    '--ifm-color-primary-darkest': c.primaryLightDark,
    '--ifm-color-primary-light': c.primaryLight,
    '--ifm-color-primary-lighter': c.primaryLight,
    '--ifm-color-primary-lightest': c.primaryLight,
  };
}

interface BrandProviderProps {
  brandId?: string;
  children: React.ReactNode;
}

export default function BrandProvider({ brandId = 'edx', children }: BrandProviderProps) {
  const [activeBrandId, setActiveBrandId] = useState<string>(brandId);

  const brand = BRAND_THEMES.find((b) => b.id === activeBrandId) || BRAND_THEMES[0];
  const isDark = typeof document !== 'undefined'
    && document.documentElement.getAttribute('data-theme') === 'dark';

  useEffect(() => {
    const vars = brandToCssVars(brand, isDark);
    const root = document.documentElement;
    Object.entries(vars).forEach(([key, value]) => {
      root.style.setProperty(key, value);
    });
  }, [brand, isDark]);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const vars = brandToCssVars(brand, document.documentElement.getAttribute('data-theme') === 'dark');
      Object.entries(vars).forEach(([key, value]) => {
        document.documentElement.style.setProperty(key, value);
      });
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, [brand]);

  return (
    <BrandContext.Provider value={{ brandId: activeBrandId, setBrandId: setActiveBrandId }}>
      {children}
    </BrandContext.Provider>
  );
}
