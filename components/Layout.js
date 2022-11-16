import { Head } from 'next/head';
import React, { Children } from 'react';

export default function Layout({ Children }) {
  return (
    <>
      <Head>
        <title>{title ? title + '- Amazona' : 'Amazona'}</title>
        <meta name="description" content="Ecommerce Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header>header</header>
        <main>{Children}</main>
        <footer>footer</footer>
      </div>
    </>
  );
}
