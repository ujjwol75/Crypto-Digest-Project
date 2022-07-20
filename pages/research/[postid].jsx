import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Research from '../../src/component/Research/Research';
import useGetHook from '../../src/customHooks/useGetHooks';
import { APIs } from '../api/hello';
const Detail = () => {
  const router = useRouter();
  const { postid } = router.query;

  const {
    isLoading: singlePageLoader,
    data: singlePageData,
    isError,
  } = useGetHook({
    queryKey: `singlePageData${postid}`,
    url: `${APIs.posts}?categories=${postid}`,
  });
  return (
    <div>
      <Head>
        <title>CryptoDigest-Research</title>
        <meta property="og:title" content={"CryptoDigest-Research"} />
        <meta property="og:image" content={"https://www.nepalitimes.com/wp-content/uploads/2022/02/cryptocurrency-banned-in-Nepal-NT-2.jpg"} />
        <meta property="og:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta name="twitter:title" content={"CryptoDigest-Research"} />
        <meta name="twitter:description" content={"All the latest content about Cryptocurrency of the world"} />
        <meta property="og:type" content="article" />
        {/* <meta property="og:url" content={`https://insidecrypto.news`} /> */}
        <meta property="fb:app_id" content={"1144829116095615"} />
      </Head>
      <Research
        singlePageLoader={singlePageLoader}
        singlePageData={singlePageData}
      />
    </div>
  );
};

export default Detail;
