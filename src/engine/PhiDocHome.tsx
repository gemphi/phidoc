import React from 'react';
import {
  BookOpen,
  Code2,
  Layers,
  LayoutGrid,
  Palette,
  Rocket,
  Search,
  Settings,
  Shield,
  Sparkles,
  type LucideIcon,
} from 'lucide-react';
import {
  Badge,
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Grid,
  Icon,
  Navbar,
  NavbarItem,
  NavbarSection,
  Page,
  Section,
  Stack,
  Text,
  Title,
} from '@phiace/puijs';
import type { PhiDocContentItem, PhiDocHomeFeature, PhiDocSiteConfig } from './types';

const FEATURE_ICONS: Record<string, LucideIcon> = {
  book: BookOpen,
  code: Code2,
  grid: LayoutGrid,
  layers: Layers,
  palette: Palette,
  rocket: Rocket,
  search: Search,
  settings: Settings,
  shield: Shield,
  sparkles: Sparkles,
};

type PhiDocHomeProps = {
  config: PhiDocSiteConfig;
  items: PhiDocContentItem[];
  onNavigate: (href: string, external?: boolean) => void;
};

function deriveFeatures(items: PhiDocContentItem[]): PhiDocHomeFeature[] {
  const categories = new Map<string, PhiDocContentItem>();
  for (const item of items) {
    if (!categories.has(item.category)) categories.set(item.category, item);
  }

  return [...categories.entries()].slice(0, 6).map(([category, item]) => ({
    title: category,
    description: item.summary || `Read the ${category} documentation.`,
    href: item.slug,
    icon: 'book',
  }));
}

export function PhiDocHome({ config, items, onNavigate }: PhiDocHomeProps) {
  const home = config.home || {};
  const firstDoc = items[0];
  const features = home.features?.length ? home.features : deriveFeatures(items);
  const actions = home.actions?.length
    ? home.actions
    : [{ label: 'Read the documentation', href: firstDoc?.slug || '/docs', variant: 'primary' as const }];
  const navItems = config.nav?.length
    ? config.nav
    : [{ label: 'Docs', href: firstDoc?.slug || '/docs' }];

  return (
    <Page
      gap={0}
      header={(
        <Navbar sticky={config.layout?.navbarSticky ?? true} variant={config.layout?.navbarVariant || 'default'} height={65}>
          <NavbarSection align="start">
            <NavbarItem onClick={() => onNavigate('/')}>{config.title}</NavbarItem>
            {config.version && <Badge variant="secondary">{config.version}</Badge>}
          </NavbarSection>
          <NavbarSection align="end">
            {navItems.map((item) => (
              <NavbarItem key={item.href} onClick={() => onNavigate(item.href, item.external)}>
                {item.label}
              </NavbarItem>
            ))}
          </NavbarSection>
        </Navbar>
      )}
      footer={(
        <Container size="lg" paddingY={4}>
          <Text size="sm" color="text-muted" align="center">
            {config.title} documentation powered by PhiDoc and puijs.
          </Text>
        </Container>
      )}
    >
      <Section background="brand-gradient" color="text-inverse" align="center" paddingY={20}>
        <Container size="lg">
          <Stack direction="column" align="center" gap={4}>
            {config.version && <Badge variant="secondary">{config.version}</Badge>}
            <Title level={1} size="3xl" align="center">{home.title || config.title}</Title>
            <Text size="lg" align="center" maxWidth="720px" opacity={0.9}>
              {home.tagline || config.description}
            </Text>
            <Stack direction="row" justify="center" align="center" gap={3} wrap marginTop={4}>
              {actions.map((action) => (
                <Button
                  key={action.href}
                  variant={action.variant || 'primary'}
                  size="lg"
                  onClick={() => onNavigate(action.href, action.external)}
                >
                  {action.label}
                </Button>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Section>

      <Section background="gradient-main" paddingY={16}>
        <Container size="lg">
          <Grid columns={{ xs: 1, md: 2, xl: 3 }} gap={4}>
            {features.map((feature) => (
              <Card
                key={feature.title}
                hoverable={Boolean(feature.href)}
                onClick={feature.href ? () => onNavigate(feature.href as string) : undefined}
              >
                <CardHeader>
                  <Stack direction="row" align="center" gap={3}>
                    <Icon icon={FEATURE_ICONS[feature.icon || 'book'] || BookOpen} size="xl" />
                    <Title level={3} size="md">{feature.title}</Title>
                  </Stack>
                </CardHeader>
                <CardBody>
                  <Text size="sm" color="text-secondary">{feature.description}</Text>
                </CardBody>
              </Card>
            ))}
          </Grid>
        </Container>
      </Section>
    </Page>
  );
}
