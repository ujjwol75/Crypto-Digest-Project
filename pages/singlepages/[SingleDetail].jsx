import React from 'react';
import useGetHook from '../../src/customHooks/useGetHooks';
import { APIs } from '../api/hello';
import {useRouter} from 'next/router';
import HomeCryptoNewsRight from '../../src/component/home/HomeCryptoNewsRight';
import MarginTradingDetails from '../../src/component/margintrading/MarginTradingDetails';


function SingleDetail() {
const router = useRouter();
const {SingleDetail}=router?.query
console.log(SingleDetail);

const { isLoading: singlePostsLoading, data: singlePostsData } = useGetHook({
  queryKey: `singlePostsData-${SingleDetail}`,
  url: `${APIs.posts}${SingleDetail}`,
});
// {curElem?.slice(0,5)}
console.log('singlepostdata', singlePostsData)

  return (
   <div className="singleDetail-wrapper container">
      <div className="homeCryptoNews-left">
        <MarginTradingDetails/>
      </div>
      <div className="homeCrypttoNews-right">
      <HomeCryptoNewsRight/>
      </div>
   </div>
  )
}

export default SingleDetail;