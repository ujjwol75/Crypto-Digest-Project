import Head from 'next/head';
import React from 'react';
import PostNews from '../../src/component/postCryptoNews/PostNews';



const index = () => {
  return (
    <>
      <Head>
        <title>CryptoDigest -Post News</title>
        <meta property="og:title" content={" CryptoDigest -PressRelease"} />
        <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
        <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta name="twitter:title" content={" CryptoDigest -PressRelease"} />
        <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>
      <div>
        <PostNews />
      </div>
    </>
  );
};

export default index;
