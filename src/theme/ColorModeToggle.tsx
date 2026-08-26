/**
 * Swizzled ColorModeToggle — bridges Docusaurus color mode
 * with puijs PuiProvider theme state.
 *
 * When the user toggles dark/light in the navbar,
 * PuiProvider's theme is updated too, so brand CSS vars
 * re-inject with the correct dark/light gradient.
 */

import React from 'react';
import ColorModeToggle from '@theme-original/ColorModeToggle';
import { usePuiTheme } from '@phiace/puijs';
import type { Theme } from '@phiace/puijs';

export default function ColorModeToggleWrapper(props: any) {
  const { setTheme } = usePuiTheme();

  const handleToggle = (isDark: boolean) => {
    const newTheme: Theme = isDark ? 'dark' : 'light';
    setTheme(newTheme);
    if (props.onChange) {
      props.onChange(isDark);
    }
  };

  return <ColorModeToggle {...props} onChange={handleToggle} />;
}
