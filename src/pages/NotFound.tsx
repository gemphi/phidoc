/**
 * Custom 404 page — uses puijs components, no Docusaurus context.
 */

import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import { Container, Stack, Title, Text, Button } from '@phiace/puijs';
import { SITE_CONFIG } from '../data/siteConfig';

export default function NotFound(): JSX.Element {
  return (
    <Layout title="Page Not Found" description={SITE_CONFIG.tagline}>
      <main style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Container size="md">
          <Stack direction="column" align="center" gap={4}>
            <Title level={1} style={{ fontSize: '4rem', margin: 0, color: 'var(--phi-color-primary)' }}>
              404
            </Title>
            <Text size="lg" muted>
              This page could not be found in the PhiDoc workspace.
            </Text>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <Button variant="primary">
                Return to PhiDoc Home
              </Button>
            </Link>
          </Stack>
        </Container>
      </main>
    </Layout>
  );
}
