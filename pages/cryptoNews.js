import Head from 'next/head';
import React from 'react';
import CryptoNewsWrapper from '../src/component/cryptoNews/CryptoNewsWrapper';
import { getApiData } from "../src/helper/AxiosInstance";
import { APIs } from './api/hello';

function CryptoNews(props) {
  return (
    <>
      <Head>
        <title>CryptoPotato - CryptoNews</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="shortcut icon" type="image/x-icon" href="favicon.png" />
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