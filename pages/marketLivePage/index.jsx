import Head from 'next/head';
import React from 'react';
import MarketLivePage from '../../src/component/margintrading/MarketLivePage/MarketLivePage';



const index = () => {
  return (
    <div>
      <Head>
        <title>CryptoDigest - Market Live</title>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
        <meta property="og:title" content={" CryptoDigest - Market Live"} />
        <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
        <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta name="twitter:title" content={" CryptoDigest - Market Live"} />
        <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>
      <MarketLivePage />
    </div>
  );
};

export default index;
