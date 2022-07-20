import Head from 'next/head';
import React from 'react';
import { APIs } from '../api/hello';
import { getApiData } from "../../src/helper/AxiosInstance";
import SearchPageWrapper from '../../src/component/searchpage/SearchPageWrapper';

function SearchPage(props) {
  return (
    <>
      <Head>
        <title> CryptoDigest-Search</title>
        <meta property="og:title" content={" CryptoDigest-Search"} />
        <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
        <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta name="twitter:title" content={" CryptoDigest-Search"} />
        <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>
      <SearchPageWrapper data={props?.searchPageData} />
    </>
  )
}

export default SearchPage;

export async function getServerSideProps({ params }) {
  const { SearchPage } = params
  const url = `${APIs.posts}?search=${SearchPage}`
  const searchPageData = await getApiData(url)
  return {
    props: {
      searchPageData: searchPageData?.data
    }, // will be passed to the page component as props
  }
}