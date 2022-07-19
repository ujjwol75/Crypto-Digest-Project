import Head from 'next/head';
import React from 'react'
import ContactWrapper from '../src/component/contact/ContactWrapper'

function contact() {
  return (
    <>
      <Head>
        <title>CryptoDigest - Contact</title>
        <meta property="og:title" content={" CryptoDigest - Contact"} />
        <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
        <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta name="twitter:title" content={" CryptoDigest - Contact"} />
        <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
        <link rel="icon" type="image/x-icon" href="favicon.ico" />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>
      <ContactWrapper />
    </>
  )
}

export default contact