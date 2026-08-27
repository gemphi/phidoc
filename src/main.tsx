import React from 'react';
import { createRoot } from 'react-dom/client';
import docsData from 'virtual:phidoc/content';
import { PhiDocSite } from './engine';
import { IconsGallery } from './pages/IconsGallery';
import '@phiace/puijs/styles';

const isIconsRoute = window.location.pathname.replace(/\/+$/, '') === '/icons';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {isIconsRoute ? <IconsGallery /> : <PhiDocSite data={docsData} />}
  </React.StrictMode>
);
