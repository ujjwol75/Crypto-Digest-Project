import React from 'react';
import useGetHook from '../../src/customHooks/useGetHooks';
import { APIs } from '../api/hello';
import { useRouter } from 'next/router';
import SingleDetailWrapper from '../../src/component/singleDetail/SingleDetailWrapper';


function SingleDetail() {
  const router = useRouter();
  const { SingleDetail } = router?.query
  console.log(SingleDetail);

  const { isLoading: singlePostsLoading, data: singlePostsData } = useGetHook({
    queryKey: `singlePostsData-${SingleDetail}`,
    url: `${APIs.posts}${SingleDetail}`,
  });
  // {curElem?.slice(0,5)}
  console.log('first')
  console.log('singlepostdata', singlePostsData)

  return (
   <>
     <SingleDetailWrapper singlePostsData={singlePostsData}/>
   </>
  )
}

export default SingleDetail;