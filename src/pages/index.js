import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        {/* <h1 className="hero__title">{siteConfig.title}</h1> */}
        <p className="big">Dadcaster</p>

        <p className="hero__subtitle">{siteConfig.tagline}</p>
        
        <div className={styles.buttons}>
        <div><Link
            className="button button--secondary button--lg"
            // to="/docs/intro">
            to="https://zora.co/collect/eth:0x6a95180c60a721e6b041a5649a77a7b46902c07f">
🧢 Own a dad hat 
          </Link></div>  
          <div><Link
            className="button button--secondary button--lg"
            // to="/docs/intro">
            to="https://app.charmverse.io/dadcaster/page-9616733840036349">
🏘️ Visit dad's house 
          </Link></div>
 
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
