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
        <title>CryptoDigest-NFT News</title>
        <meta property="og:title" content={" CryptoDigest-NFT News"} />
        <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
        <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta name="twitter:title" content={" CryptoDigest-NFT News"} />
        <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>
      <Nft data={allScribbedPosts} />

    </div>
  );
};

export default Detail;

