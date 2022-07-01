import React from 'react';
import Link from 'next/link';
import CryptoNewsDetails from './CryptoNewsDetails'
import LatestCryptoNewsContains from './LatestCryptoNewsContains';
import HomeCryptoNewsRight from '../home/HomeCryptoNewsRight';
import useGetHook from '../../customHooks/useGetHooks';
import { APIs } from '../../../pages/api/hello';
import SubscribeForm from '../SubscribeForm';


function CryptoNewsWrapper() {
  const { isLoading: postsLoading, data: postsData } = useGetHook(
    {
      queryKey: 'postsData',
      url: APIs?.posts
    }
  );


  return (
    <div className="cryptoNewsWrapper container">
      <div className="homeCryptoNews-left">
        <CryptoNewsDetails />
        <h2 className='thintitle'>The Latest Crypto News</h2>

        {postsData?.results?.map((item, key) =>
          <Link href={`/singlepages/${item.id}`}>
            <a>
            <LatestCryptoNewsContains
              pictures={item.image}
              date={item.created}
              newsTitle={item.title}
              newsText={item.description}
            />
            </a>
          </Link>
        )}
      </div>
      <div className="homeCrypttoNews-right">
      <HomeCryptoNewsRight postsData={postsData}/>
        <SubscribeForm />
      </div>
    </div>
  )
}

export default CryptoNewsWrapper