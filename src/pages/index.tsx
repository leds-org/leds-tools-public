import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ display: 'flex', justifyContent: 'center', padding: "5% 0 0 0", color: "#000000"}}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle" style={{ display: 'flex', justifyContent: 'center', padding: "5% 0 0 0", color: "#000000", fontWeight: 'bold', fontStyle: 'italic' }}>{siteConfig.tagline}</p>
        <div className={styles.cardsContainer}>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="KnowLeds">
      <HomepageHeader />
      <main>
      </main>
    </Layout>
  );
}
