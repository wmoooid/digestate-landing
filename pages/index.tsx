import type { NextPage } from 'next';
import Head from 'next/head';
import { Header } from '../components/Header';
import { SectionHero } from '../components/SectionHero';
import { SectionCases } from '../components/SectionCases/SectionCases';
import { SectionOffer } from '../components/SectionOffer';
import { Footer } from '../components/Footer';
import 'macro-css';
import { lazy, Suspense } from 'react';
// import { RegularSections } from '../components/RegularSections';

const RegularSections = lazy(() => import('../components/RegularSections'));

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta httpEquiv='Content-Type' content='text/html; charset=UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0, maximum-scale=1.0' />
        <link
          href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap'
          rel='stylesheet'
        />
        <title>digēstate – Digital real estate registration service</title>
      </Head>
      <Header />
      <main>
        <SectionHero />
        <Suspense fallback={<div></div>}>
          <RegularSections />
        </Suspense>
        <SectionCases />
        <SectionOffer />
        <Footer />
      </main>
    </>
  );
};

export default Home;
