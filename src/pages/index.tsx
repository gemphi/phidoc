import React, { useState } from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
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
  PuiProvider,
  BRAND_THEMES,
  BrandTheme,
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

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  const [selectedBrand, setSelectedBrand] = useState<string>('edx');

  const activeTheme = BRAND_THEMES.find((t) => t.id === selectedBrand) || BRAND_THEMES[0];

  return (
    <PuiProvider theme={activeTheme.id as any}>
      <Layout description="Unified documentation for the gemphi workspace">
        <header
          style={{
            background: activeTheme.gradient,
            color: '#ffffff',
            padding: '4rem 1rem',
            textAlign: 'center',
          }}
        >
          <Container size="lg">
            <Stack direction="column" align="center" gap={4}>
              <Title level={1} style={{ color: '#ffffff', margin: 0, fontSize: '3rem' }}>
                {siteConfig.title}
              </Title>
              <Text size="lg" style={{ color: '#f8fafc', maxWidth: '680px', margin: '0 auto' }}>
                {siteConfig.tagline}
              </Text>

              {/* 16-Brand Theme Selector Bar */}
              <Stack direction="column" align="center" gap={2} style={{ marginTop: '1.5rem' }}>
                <Text size="sm" style={{ color: '#e2e8f0', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Active Brand Theme ({BRAND_THEMES.length} Paragon Brands):
                </Text>
                <Stack direction="row" justify="center" gap={2} wrap>
                  {BRAND_THEMES.map((theme: BrandTheme) => (
                    <Button
                      key={theme.id}
                      size="sm"
                      variant={selectedBrand === theme.id ? 'primary' : 'outline'}
                      onClick={() => setSelectedBrand(theme.id)}
                      style={{
                        borderColor: selectedBrand === theme.id ? '#ffffff' : 'rgba(255,255,255,0.3)',
                        color: '#ffffff',
                        backgroundColor: selectedBrand === theme.id ? 'rgba(255,255,255,0.25)' : 'transparent',
                      }}
                    >
                      {theme.name}
                    </Button>
                  ))}
                </Stack>
              </Stack>
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
    </PuiProvider>
  );
}
