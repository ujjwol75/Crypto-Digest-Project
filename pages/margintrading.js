import Head from 'next/head';
import React from 'react';
import MarginTradingWrapper from '../src/component/margintrading/MarginTradingWrapper';

function Margintrading() {
  return (
    <>
      <Head>
        <title>CryptoPotato -Margintradding</title>
      </Head>
    <MarginTradingWrapper/>
    </>
  )
}

export default Margintrading;