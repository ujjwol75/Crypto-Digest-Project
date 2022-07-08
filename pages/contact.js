import Head from 'next/head';
import React from 'react'
import ContactWrapper from '../src/component/contact/ContactWrapper'

function contact() {
  return (
    <>
     <Head>
        <title>CryptoPotato - Contact</title>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.png" />
      </Head>
        <ContactWrapper/>
    </>
  )
}

export default contact