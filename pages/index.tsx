import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import 'macro-css';

const Home: NextPage = () => {
  return (
    <Head>
      <meta name='viewport' content='width=device-width, user-scalable=no' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link href='https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700&display=swap' rel='stylesheet' />
      <title>digestate</title>
    </Head>
  );
};

export default Home;
