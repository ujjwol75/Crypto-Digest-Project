import Head from 'next/head';
import React from 'react';
import PostNews from '../../src/component/postCryptoNews/PostNews';



const index = () => {
  return (
    <>
      <Head>
        <title>Post News:The Crypto Digest</title>
      </Head>
      <div>
      <PostNews />
      </div>
    </>
  );
};

export default index;
