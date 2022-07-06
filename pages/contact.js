import Head from 'next/head';
import React from 'react'
import ContactWrapper from '../src/component/contact/ContactWrapper'

function contact() {
  return (
    <>
     <Head>
        <title>CryptoPotato - Contact</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.png" />
      </Head>
        <ContactWrapper/>
    </>
  )
}

export default contact