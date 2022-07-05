import React from 'react';
import CryptoNewsWrapper from '../src/component/cryptoNews/CryptoNewsWrapper';
import {getApiData} from "../src/helper/AxiosInstance";
import { APIs } from './api/hello';

function CryptoNews(props) {
  return (
    <>
    <CryptoNewsWrapper postsData={props.postsData}/>
    </>
  )
}

export default CryptoNews;

export async function getServerSideProps({params}) {
  const postsurl = APIs?.posts;
  const postsData = await getApiData(postsurl);
  return {
    props: {
      postsData: postsData?.data
    }, // will be passed to the page component as props
  }
}