import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Best Movie Series - {new Date().getFullYear()}</title>
        <meta name="description" content="Best Movie Series" />
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
