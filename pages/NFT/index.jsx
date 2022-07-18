import Head from 'next/head';
import React from 'react';
import useGetHook from '../../src/customHooks/useGetHooks';
import Nft from "../../src/component/Nft/index"

import { APIs } from '../api/hello';
const Detail = () => {
  const nftUrl = 'https://economictimes.indiatimes.com/topic/nft/news';

  const { isLoading: allScribbedPostsLoading, data: allScribbedPosts } =
    useGetHook({
      queryKey: 'allScribbedPosts',
      url: `${APIs.scrappedPost}?source=${nftUrl}`,
      parma: 'params',
    });
  return (
    <div>
      <Head>
        <title>NFT News:The Crypto Digest</title>
      </Head>
      <Nft data={allScribbedPosts} />

    </div>
  );
};

export default Detail;

