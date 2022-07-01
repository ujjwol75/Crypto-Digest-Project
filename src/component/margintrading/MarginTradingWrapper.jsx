import React from 'react';
import HomeCryptoNewsRight from '../home/HomeCryptoNewsRight';
import SubscribeForm from '../SubscribeForm';
import MarginTradingDetails from './MarginTradingDetails';
import useGetHook from '../../customHooks/useGetHooks';
import { APIs } from '../../../pages/api/hello';

function MarginTradingWrapper() {
  const { isLoading:postsLoading, data: postsData } = useGetHook(
    {
        queryKey: 'postsData',
        url: APIs?.posts
    }
);
  return (
     <div className="MarginTraddingWrapper container">
      <div className="homeCryptoNews-left">
        <MarginTradingDetails/>
      </div>
      <div className="homeCrypttoNews-right">
      <HomeCryptoNewsRight postsData={postsData}/>
      <SubscribeForm/>
      </div>
     </div>
  )
}

export default MarginTradingWrapper;