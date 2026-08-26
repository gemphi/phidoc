/**
 * Custom 404 page — uses puijs components, no Docusaurus context.
 */

import React from 'react';
import { Section, Container, Stack, Title, Text, Button, Link } from '@phiace/puijs';

export default function NotFound(): JSX.Element {
  return (
    <Section as="main" background="gradient-main" minHeight="70vh" paddingY={16} align="center">
      <Container size="md">
        <Stack direction="column" align="center" gap={4}>
          <Title level={1} size="3xl" color="primary" margin={0}>
            404
          </Title>
          <Text size="lg" muted>
            This page could not be found in the PhiDoc workspace.
          </Text>
          <Link href="/" textDecoration="none">
            <Button variant="primary">
              Return to PhiDoc Home
            </Button>
          </Link>
        </Stack>
      </Container>
    </Section>
  );
}
