import Head from 'next/head';
import React from 'react';
import MarketLivePage from '../../src/component/margintrading/MarketLivePage/MarketLivePage';



const index = () => {
  return (
    <div>
      <Head>
        <title>Live Market:The Crypto Insider</title>
      </Head>
      <MarketLivePage />
    </div>
  );
};

export default index;
