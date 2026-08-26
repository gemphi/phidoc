import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { usePuiTheme } from '@phiace/puijs';
import { SITE_CONFIG } from '../data/siteConfig';
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
  BRAND_THEMES,
} from '@phiace/puijs';

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

/** Brand selector bar — uses puijs usePuiTheme context. */
function BrandSelectorBar() {
  const { brandId, setBrandId } = usePuiTheme();

  return (
    <Stack direction="column" align="center" gap={2} style={{ marginTop: '1.5rem' }}>
      <Text size="sm" style={{ color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
        Active Brand Theme ({BRAND_THEMES.length} puijs Brands):
      </Text>
      <Stack direction="row" justify="center" gap={2} wrap>
        {BRAND_THEMES.map((theme) => (
          <Button
            key={theme.id}
            size="sm"
            variant={brandId === theme.id ? 'primary' : 'outline'}
            onClick={() => setBrandId(theme.id)}
            style={{
              borderColor: brandId === theme.id ? '#ffffff' : 'rgba(255,255,255,0.3)',
              color: '#ffffff',
              backgroundColor: brandId === theme.id ? 'rgba(255,255,255,0.25)' : 'transparent',
            }}
          >
            {theme.name}
          </Button>
        ))}
      </Stack>
    </Stack>
  );
}

export default function Home(): JSX.Element {
  const urlBrand = typeof window !== 'undefined'
    ? new URLSearchParams(window.location.search).get('brand') || SITE_CONFIG.defaultBrandId
    : SITE_CONFIG.defaultBrandId;

  return (
    <Layout description={SITE_CONFIG.tagline}>
      <header
        style={{
          background: 'var(--phi-brand-gradient)',
          color: '#ffffff',
          padding: '4rem 1rem',
          textAlign: 'center',
        }}
      >
        <Container size="lg">
          <Stack direction="column" align="center" gap={4}>
            <Title level={1} style={{ color: '#ffffff', margin: 0, fontSize: '3rem' }}>
              {SITE_CONFIG.title}
            </Title>
            <Text size="lg" style={{ color: '#f8fafc', maxWidth: '680px', margin: '0 auto' }}>
              {SITE_CONFIG.tagline}
            </Text>
            <BrandSelectorBar />
          </Stack>
        </Container>
      </header>

        <main style={{ padding: '3.5rem 0', background: 'var(--ifm-background-color)' }}>
          <Container size="lg">
            <Stack direction="column" gap={6}>
              <Stack direction="column" align="center" gap={2}>
                <Title level={2} style={{ margin: 0 }}>
                  Workspace Architecture & Ecosystem Portals
                </Title>
                <Text size="md" muted>
                  Explore the modular engines and specifications across the GemPhi collective.
                </Text>
              </Stack>

              <Grid cols={2} gap={4}>
                {PROJECT_REGISTRY.map((project) => (
                  <Card key={project.title} hoverable variant="elevated">
                    <CardHeader>
                      <Stack direction="column" gap={1}>
                        <Stack direction="row" align="center" justify="between" style={{ width: '100%' }}>
                          <Title level={3} style={{ margin: 0 }}>
                            {project.title}
                          </Title>
                          <Badge variant={project.badgeVariant}>{project.category}</Badge>
                        </Stack>
                        <Text size="xs" muted>
                          {project.metrics}
                        </Text>
                      </Stack>
                    </CardHeader>
                    <CardBody>
                      <Text size="sm">{project.description}</Text>
                    </CardBody>
                    <CardFooter>
                      <Link to={project.link} style={{ width: '100%', textDecoration: 'none' }}>
                        <Button variant="primary" block>
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
