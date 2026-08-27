import React from 'react';
import { createRoot } from 'react-dom/client';
import docsData from 'virtual:phidoc/content';
import { PhiDocSite } from './engine';
import '@phiace/puijs/styles';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PhiDocSite data={docsData} />
  </React.StrictMode>
);
