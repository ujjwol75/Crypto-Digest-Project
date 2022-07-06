import Head from 'next/head';
import React from 'react';
import CryptoNewsWrapper from '../src/component/cryptoNews/CryptoNewsWrapper';
import MarginTradingWrapper from '../src/component/margintrading/MarginTradingWrapper';

function Margintrading() {
  return (
    <>
      <Head>
        <title>CryptoPotato -Margintradding</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.png"/>
      </Head>
    <MarginTradingWrapper/>
    </>
  )
}

export default Margintrading;