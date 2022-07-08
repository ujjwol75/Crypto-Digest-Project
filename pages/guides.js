import Head from 'next/head';
import React from 'react'
import ScrabbedData from '../src/component/scrabbedData/ScrabbedData'

function guides() {
  return (
    <>
     <Head>
        <title>CryptoPotato - Guides</title>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.png"/>
      </Head>
       <ScrabbedData/>
    </>
  )
}

export default guides