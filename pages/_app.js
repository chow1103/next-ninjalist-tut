import Layout from '@/components/Layout';
import '@/styles/globals.css';
import React from 'react';

import { Nunito } from '@next/font/google';

const nunito = Nunito({
  weight: ['400', '600', '700'],
  style: ['normal'],
  subsets: ['latin']
});

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <style jsx global>
        {`
          body {
            font-family: ${nunito.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} className={nunito.className} />
    </Layout>
  );
}
