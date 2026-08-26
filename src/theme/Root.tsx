/**
 * Swizzled Root — wraps the entire Docusaurus app with PuiProvider
 * so that puijs brand CSS variables are injected globally.
 *
 * Uses puijs PuiProvider (not a custom BrandProvider) for:
 * - Brand theme CSS var injection (--phi-color-primary, --phi-brand-gradient, etc.)
 * - Light/dark theme management with localStorage persistence
 * - 16 brand themes from BRAND_THEMES
 */

import React from 'react';
import Root from '@theme-original/Root';
import { PuiProvider } from '@phiace/puijs';
import { SITE_CONFIG } from '../data/siteConfig';

export default function RootWrapper(props: any) {
  return (
    <PuiProvider defaultBrand={SITE_CONFIG.defaultBrandId}>
      <Root {...props} />
    </PuiProvider>
  );
}
