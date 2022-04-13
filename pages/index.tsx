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
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='manifest' href='/site.webmanifest' />
        <meta name='msapplication-config' content='/browserconfig.xml' />
        <meta name='msapplication-TileColor' content='#4080FF' />
        <meta name='theme-color' content='#4080FF' />
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
