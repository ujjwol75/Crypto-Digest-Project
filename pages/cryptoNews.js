import Head from 'next/head';
import React from 'react';
import CryptoNewsWrapper from '../src/component/cryptoNews/CryptoNewsWrapper';
import { getApiData } from "../src/helper/AxiosInstance";
import { APIs } from './api/hello';

function CryptoNews(props) {
  return (
    <>
      <Head>
        <title>CryptoDigest-News</title>
        <meta property="og:title" content={" CryptoDigest-News"} />
        <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
        <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta name="twitter:title" content={" CryptoDigest-News"} />
        <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>
      <CryptoNewsWrapper postsData={props.postsData} />
    </>
  )
}

export default CryptoNews;

export async function getServerSideProps({ params }) {
  const postsurl = APIs?.posts;
  const postsData = await getApiData(postsurl);
  return {
    props: {
      postsData: postsData?.data
    }, // will be passed to the page component as props
  }
}