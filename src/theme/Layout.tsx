import React, { type ReactNode } from 'react';
import clsx from 'clsx';
import ErrorBoundary from '@docusaurus/ErrorBoundary';
import {
  PageMetadata,
  SkipToContentFallbackId,
  ThemeClassNames,
} from '@docusaurus/theme-common';
import SkipToContent from '@theme-original/SkipToContent';
import AnnouncementBar from '@theme-original/AnnouncementBar';
import Navbar from '@theme-original/Navbar';
import Footer from '@theme-original/Footer';
import LayoutProvider from '@theme-original/Layout/Provider';
import ErrorPageContent from '@theme-original/ErrorPageContent';
import { Section } from '@phiace/puijs';
import type { Props } from '@theme/Layout';

export default function Layout(props: Props): ReactNode {
  const {
    children,
    noFooter,
    wrapperClassName,
    title,
    description,
  } = props;

  return (
    <LayoutProvider>
      <PageMetadata title={title} description={description} />

      <SkipToContent />

      <AnnouncementBar />

      <Navbar />

      <Section
        as="main"
        id={SkipToContentFallbackId}
        className={clsx(
          ThemeClassNames.layout.main.container,
          ThemeClassNames.wrapper.main,
          wrapperClassName,
        )}
        background="gradient-main"
        minHeight="100vh"
      >
        <ErrorBoundary fallback={(params) => <ErrorPageContent {...params} />}>
          {children}
        </ErrorBoundary>
      </Section>

      {!noFooter && <Footer />}
    </LayoutProvider>
  );
}
