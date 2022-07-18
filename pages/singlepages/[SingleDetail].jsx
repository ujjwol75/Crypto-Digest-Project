import Head from 'next/head';
import React from 'react';
import { APIs } from '../api/hello';
import SingleDetailWrapper from '../../src/component/singleDetail/SingleDetailWrapper';
import { getApiData } from "../../src/helper/AxiosInstance";


function SingleDetail(props) {
  return (
    <>
      <Head>
        <title>CryptoDigest - {props?.pageScrapped?.title || props?.posts?.title}</title>
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