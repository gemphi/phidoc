import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BlogPortal, DocsPortal, PuiProvider, usePuiTheme } from '@phiace/puijs';
import type { PhiDocData } from './types';
import { PhiDocHome } from './PhiDocHome';

type PhiDocSiteProps = {
  data: PhiDocData;
};

function normalizePath(pathname: string): string {
  const normalized = pathname.replace(/\/+$/, '');
  return normalized || '/';
}

function getBrowserPath(): string {
  if (typeof window === 'undefined') return '/';
  return normalizePath(window.location.pathname);
}

function PhiDocSiteContent({ data }: PhiDocSiteProps) {
  const { isDark, setTheme } = usePuiTheme();
  const [currentPath, setCurrentPath] = useState(getBrowserPath);
  const routeBasePath = `/${(data.config.docs?.routeBasePath || 'docs').replace(/^\/+|\/+$/g, '')}`;
  const blogRouteBasePath = `/${(data.config.blog?.routeBasePath || 'blog').replace(/^\/+|\/+$/g, '')}`;
  const visibleItems = useMemo(() => {
    const available = data.items.filter((item) => !item.hidden && !item.draft);
    if (!data.sidebars.length) return available;

    const byId = new Map(available.map((item) => [item.id, item]));
    return data.sidebars
      .flatMap((section) => section.items.map((item) => byId.get(item.id)))
      .filter((item): item is NonNullable<typeof item> => Boolean(item));
  }, [data.items, data.sidebars]);

  const visibleBlogItems = useMemo(() => {
    const available = data.blogItems.filter((item) => !item.hidden && !item.draft);
    if (!data.blogSidebars.length) return available;

    const byId = new Map(available.map((item) => [item.id, item]));
    return data.blogSidebars
      .flatMap((section) => section.items.map((item) => byId.get(item.id)))
      .filter((item): item is NonNullable<typeof item> => Boolean(item));
  }, [data.blogItems, data.blogSidebars]);

  useEffect(() => {
    const handlePopState = () => setCurrentPath(getBrowserPath());
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = useCallback((href: string, external?: boolean) => {
    if (external || /^https?:\/\//.test(href)) {
      window.location.assign(href);
      return;
    }

    const nextPath = normalizePath(href);
    window.history.pushState({}, '', nextPath);
    setCurrentPath(nextPath);
    window.scrollTo({ top: 0 });
  }, []);

  const isDocsRoute = currentPath === routeBasePath || currentPath.startsWith(`${routeBasePath}/`);
  const isBlogRoute = currentPath === blogRouteBasePath || currentPath.startsWith(`${blogRouteBasePath}/`);
  const activeItem = isDocsRoute
    ? visibleItems.find((item) => normalizePath(item.slug) === currentPath) || visibleItems[0]
    : undefined;
  const activeBlogItem = isBlogRoute
    ? visibleBlogItems.find((item) => normalizePath(item.slug) === currentPath) || visibleBlogItems[0]
    : undefined;

  if (isBlogRoute && visibleBlogItems.length) {
    return (
      <BlogPortal
        posts={visibleBlogItems}
        initialPostId={activeBlogItem?.id || visibleBlogItems[0]?.id || ''}
        activePostId={activeBlogItem?.id}
        onPostChange={(id) => {
          const item = visibleBlogItems.find((post) => post.id === id);
          if (item) navigate(item.slug);
        }}
        brandTitle={data.config.title}
        version={data.config.version}
        dark={isDark}
        onToggleDark={() => setTheme(isDark ? 'light' : 'dark')}
      />
    );
  }

  if (!isDocsRoute) {
    return <PhiDocHome config={data.config} items={visibleItems} onNavigate={navigate} />;
  }

  return (
    <DocsPortal
      guides={visibleItems}
      initialGuideId={activeItem?.id || visibleItems[0]?.id || ''}
      activeGuideId={activeItem?.id}
      onGuideChange={(id) => {
        const item = visibleItems.find((guide) => guide.id === id);
        if (item) navigate(item.slug);
      }}
      version={data.config.version || ''}
      brandTitle={data.config.title}
      onBackToApp={() => navigate('/')}
      backToAppLabel="Home"
      dark={isDark}
      onToggleDark={() => setTheme(isDark ? 'light' : 'dark')}
    />
  );
}

export function PhiDocSite({ data }: PhiDocSiteProps) {
  return (
    <PuiProvider defaultTheme="system" defaultThemeStyle="apple" defaultBrand={data.config.brandId}>
      <PhiDocSiteContent data={data} />
    </PuiProvider>
  );
}
