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
  console.log(singlePageData)
  return (
    <div>
      <Head>
        <title>Live Market:The Crypto Digest</title>
      </Head>
      <Research
        singlePageLoader={singlePageLoader}
        singlePageData={singlePageData}
      />
    </div>
  );
};

export default Detail;
