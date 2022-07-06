import Head from 'next/head';
import React from 'react';
import { APIs } from '../api/hello';
import SingleDetailWrapper from '../../src/component/singleDetail/SingleDetailWrapper';
import { getApiData } from "../../src/helper/AxiosInstance";


function SingleDetail(props) {
console.log(props);
  return (
    <>
      <Head>
        <title>CryptoPotato - {props?.singlePost?.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <SingleDetailWrapper singlePostsData={props?.singlePost} />
    </>
  )
}

export default SingleDetail;


export async function getServerSideProps({ params }) {
  const { SingleDetail } = params
  const url = `${APIs.posts}${SingleDetail}`
  const singlePost = await getApiData(url)
  return {
    props: {
      singlePost: singlePost?.data
    }, // will be passed to the page component as props
  }
}