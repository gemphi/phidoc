import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import phidoc from './src/engine/plugin';
import siteConfig from './phidoc.config';

export default defineConfig({
  plugins: [react(), phidoc(siteConfig)],
});
