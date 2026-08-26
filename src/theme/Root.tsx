/**
 * Swizzled Root — wraps the entire Docusaurus app with BrandProvider
 * so that puijs brand CSS variables are injected globally.
 */

import React from 'react';
import Root from '@theme/Root';
import BrandProvider from '@theme/BrandProvider';

export default function RootWrapper(props: any) {
  return (
    <BrandProvider brandId="edx">
      <Root {...props} />
    </BrandProvider>
  );
}
