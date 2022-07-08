import Head from 'next/head';
import React from 'react';
import MarginTradingWrapper from '../src/component/margintrading/MarginTradingWrapper';

function Margintrading() {
  return (
    <>
      <Head>
        <title>CryptoPotato -Margintradding</title>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.png"/>
      </Head>
    <MarginTradingWrapper/>
    </>
  )
}

export default Margintrading;