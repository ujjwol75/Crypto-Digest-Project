import Head from 'next/head';
import React from 'react';
import { APIs } from '../api/hello';
import SingleDetailWrapper from '../../src/component/singleDetail/SingleDetailWrapper';
import { getApiData } from "../../src/helper/AxiosInstance";


function SingleDetail(props) {
  return (
    <>
      <Head>
        <title>CryptoDigest-{props?.pageScrapped?.title || props?.posts?.title}</title>
        <meta property="og:title" content={props?.pageScrapped?.title || props?.posts?.title} />
        <meta property="og:image" content={props?.pageScrapped?.preview_image || props?.posts?.image} />
        <meta property="og:description" content={props?.pageScrapped?.description || props?.posts?.description} />
        <meta name="twitter:title" content={props?.pageScrapped?.title || props?.posts?.title} />
        <meta name="twitter:description" content={props?.pageScrapped?.description || props?.posts?.description} />
        {/* <link rel="icon" type="image/x-icon" href="favicon.ico" /> */}
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>
      <SingleDetailWrapper singlePostsData={props?.posts?.detail ? props?.pageScrapped : props.posts} />
    </>
  )
}

export default SingleDetail;


export async function getServerSideProps({ params }) {
  const pageScrappedResponse = await getApiData(`${APIs.scrappedPost}${params?.SingleDetail}`)
  const postsResponse = await getApiData(`${APIs.posts}${params?.SingleDetail}`)
  return {
    props: {
      pageScrapped: pageScrappedResponse?.data,
      posts: postsResponse?.data
    }, // will be passed to the page component as props
  }
}