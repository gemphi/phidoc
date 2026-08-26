import React, { useState, useEffect } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
  Container,
  Grid,
  Stack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Badge,
  Button,
  Title,
  Text,
  BrandSelector,
  BRAND_THEMES,
  BrandTheme,
} from '@phiace/puijs';
import { SITE_CONFIG } from '../data/siteConfig';

interface ProjectDoc {
  title: string;
  category: string;
  description: string;
  link: string;
  badgeVariant: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  metrics: string;
}

const PROJECT_REGISTRY: ProjectDoc[] = [
  {
    title: 'Phiano',
    category: 'Cognitive AI & Language',
    description: 'Continuous phase manifold, Kuramoto oscillator network, and 32-core Phinum topological language instrument with 64 I Ching perspectives.',
    link: '/docs/phi/intro',
    badgeVariant: 'primary',
    metrics: '32 Cores · 64 Hexagrams',
  },
  {
    title: 'Phixum',
    category: 'Options Market Making',
    description: 'High-performance Rust options trading engine architected on the NautilusTrader event-driven paradigm across 16 institutional roles.',
    link: '/docs/phixum/intro',
    badgeVariant: 'info',
    metrics: '16 Layers · 18 Crates',
  },
  {
    title: 'PUI.js',
    category: '3D & Enterprise UI Engine',
    description: 'Enterprise React 19 design system uniting Palantir Blueprint density with edX Paragon ergonomics across 16 brand themes.',
    link: '/docs/shared/intro',
    badgeVariant: 'success',
    metrics: '16 Brands · 80+ Primitives',
  },
  {
    title: 'Shared Standards',
    category: 'Architecture & Conventions',
    description: 'Unified repository standards, Diem-compatible documentation formats, and zero-lock concurrency invariants.',
    link: '/docs/shared/diem-standards',
    badgeVariant: 'warning',
    metrics: 'RFC Standards · Typestates',
  },
];

export default function Home(): JSX.Element {
  const [selectedBrand, setSelectedBrand] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const urlBrand = new URLSearchParams(window.location.search).get('brand');
      return urlBrand || localStorage.getItem('pui-brand-theme') || SITE_CONFIG.defaultBrandId;
    }
    return SITE_CONFIG.defaultBrandId;
  });

  const activeTheme = BRAND_THEMES.find((t) => t.id === selectedBrand) || BRAND_THEMES[0];

  const handleBrandChange = (theme: BrandTheme) => {
    setSelectedBrand(theme.id);
    if (typeof window !== 'undefined') {
      localStorage.setItem('pui-brand-theme', theme.id);
      document.documentElement.style.setProperty('--phi-color-primary', theme.colors.primary);
      document.documentElement.style.setProperty('--phi-color-primary-hover', theme.colors.primaryHover);
      document.documentElement.style.setProperty('--phi-brand-gradient', theme.gradient);
    }
  };

  return (
    <Layout description={SITE_CONFIG.tagline}>
      <header
        style={{
          background: activeTheme.gradient,
          color: '#ffffff',
          padding: '4.5rem 1.5rem',
          textAlign: 'center',
          transition: 'background 0.3s ease',
        }}
      >
        <Container size="lg">
          <Stack direction="column" align="center" gap={4}>
            <Title level={1} style={{ color: '#ffffff', margin: 0, fontSize: '2.75rem', fontWeight: 600, letterSpacing: '-0.02em' }}>
              {SITE_CONFIG.title}
            </Title>
            <Text size="lg" style={{ color: 'rgba(255,255,255,0.92)', maxWidth: '640px', margin: '0 auto', fontWeight: 400, lineHeight: 1.6 }}>
              {SITE_CONFIG.tagline}
            </Text>

            {/* PUI.js Brand Selector with 16 Paragon Themes */}
            <Stack direction="row" align="center" justify="center" gap={3} style={{ marginTop: '1rem' }}>
              <Text size="sm" style={{ color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>
                Paragon Theme:
              </Text>
              <BrandSelector value={selectedBrand} onChange={handleBrandChange} />
            </Stack>
          </Stack>
        </Container>
      </header>

      <main style={{ padding: '3.5rem 0', background: 'var(--phi-gradient-main)' }}>
        <Container size="lg">
          <Stack direction="column" gap={6}>
            <Stack direction="column" align="center" gap={2}>
              <Title level={2} style={{ margin: 0, fontSize: '1.75rem', fontWeight: 600 }}>
                Workspace Architecture & Ecosystem Portals
              </Title>
              <Text size="md" style={{ color: 'var(--phi-color-text-secondary)', fontWeight: 400 }}>
                Explore the modular engines, formal specifications, and design primitives across GemPhi.
              </Text>
            </Stack>

            <Grid cols={2} gap={4}>
              {PROJECT_REGISTRY.map((project) => (
                <Card key={project.title} hoverable variant="elevated" style={{ borderRadius: '12px' }}>
                  <CardHeader>
                    <Stack direction="column" gap={1}>
                      <Stack direction="row" align="center" justify="between" style={{ width: '100%' }}>
                        <Title level={3} style={{ margin: 0, fontSize: '1.25rem', fontWeight: 550 }}>
                          {project.title}
                        </Title>
                        <Badge variant={project.badgeVariant} style={{ borderRadius: '9999px', fontWeight: 500, fontSize: '0.75rem' }}>
                          {project.category}
                        </Badge>
                      </Stack>
                      <Text size="xs" style={{ color: 'var(--phi-color-text-muted)', fontWeight: 450 }}>
                        {project.metrics}
                      </Text>
                    </Stack>
                  </CardHeader>
                  <CardBody>
                    <Text size="sm" style={{ color: 'var(--phi-color-text-secondary)', lineHeight: 1.6 }}>
                      {project.description}
                    </Text>
                  </CardBody>
                  <CardFooter>
                    <Link to={project.link} style={{ width: '100%', textDecoration: 'none' }}>
                      <Button variant="primary" style={{ width: '100%', borderRadius: '8px', fontWeight: 500 }}>
                        Explore Documentation
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </Grid>
          </Stack>
        </Container>
      </main>
    </Layout>
  );
}
