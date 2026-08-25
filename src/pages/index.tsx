import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Heading from '@theme/Heading';

import styles from './index.module.css';

type Project = {
  title: string;
  description: string;
  link: string;
  badge: string;
};

const projects: Project[] = [
  {
    title: 'Phi',
    description: 'Rust-native Apple SDK bindings, ML/AI models (PhiFly, Phigum), and UI frameworks (PUIKit, AppKit).',
    link: '/docs/phi/intro',
    badge: 'Rust + Apple SDKs',
  },
  {
    title: 'Phixum',
    description: 'Production-grade Rust options trading engine with lock-free architecture, Black-Scholes pricing, and ML integration.',
    link: '/docs/phixum/intro',
    badge: 'Rust + Trading',
  },
  {
    title: 'Shared Standards',
    description: 'Diem-compatible README format, contributing guidelines, and cross-workspace conventions.',
    link: '/docs/shared/intro',
    badge: 'Conventions',
  },
];

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/docs/phi/intro">
            Explore Phi
          </Link>
          <Link className="button button--secondary button--lg" to="/docs/phixum/intro">
            Explore Phixum
          </Link>
        </div>
      </div>
    </header>
  );
}

function ProjectCard({project}: {project: Project}) {
  return (
    <div className="col col--4 margin-vert--md">
      <div className="card">
        <div className="card__header">
          <h3>{project.title}</h3>
          <span className="badge badge--secondary">{project.badge}</span>
        </div>
        <div className="card__body">
          <p>{project.description}</p>
        </div>
        <div className="card__footer">
          <Link to={project.link} className="button button--primary button--block">
            Read Docs
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout description="Unified documentation for the gemphi workspace">
      <HomepageHeader />
      <main>
        <div className="container padding-vert--xl">
          <div className="row">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
