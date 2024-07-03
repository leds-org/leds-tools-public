import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

import MySvg from '../../static/img/vamos.svg';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header>
      <div className="container">
        <Heading as="h1" className="hero__title" style={{ display: 'flex', justifyContent: 'center', padding: "5% 0 0 0", color: "#446BFF "}}>
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <Link className={styles.cardLink} to="/docs/r2d2/intro">
              <img src="/img/r2d2.png" alt="R2D2" className={styles.cardImage} />
              <h3>R2D2</h3>
              <p>Plugin que faz a geração automática de código para diversas partes do projeto, incluindo a criação de interfaces de usuário, lógica de servidor, documentação e diagramas UML.</p>
            </Link>
          </div>
          <div className={styles.card}>
            <Link className={styles.cardLink} to="/docs/bb8/intro">
              <img src="/img/bb8.png" alt="BB-8" className={styles.cardImage} />
              <h3>BB-8</h3>
              <p>Plugin que permite descrever requisitos de software, casos de uso, regras de negócio e outras construções essenciais para definir o domínio do problema em projetos de software.</p>
            </Link>
          </div>
          <div className={styles.card}>
            <Link className={styles.cardLink} to="/docs/made/intro">
              <img src="/img/made.png" alt="MADE" className={styles.cardImage} />
              <h3>MADE</h3>
              <p>Plugin que capacita o Scrum Master e a equipe de desenvolvimento a criar o backlog e sprints com base em processos que podem ser reutilizados e padronizados ao longo do projeto e/ou entre diferentes projetos.</p>
            </Link>
          </div>
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
      description="Documentação LEDS Tools">
      <HomepageHeader />
      <main>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <MySvg className="my-svg-class" />
        </div>
      </main>
    </Layout>
  );
}
