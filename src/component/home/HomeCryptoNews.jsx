import React from 'react';
import Link from 'next/link';
import HomeCryptoNewsRight from './HomeCryptoNewsRight';
import HomeCrytoNewsContains from './HomeCrytoNewsContains';
import LoadMoreCryptoNews from './LoadMoreCryptoNews';
import useGetHook from '../../customHooks/useGetHooks';
import { APIs } from '../../../pages/api/hello';

function HomeCryptoNews() {
  const { isLoading:postsLoading, data: postsData } = useGetHook(
    {
        queryKey: 'postsData',
        url: APIs?.posts
    }
);
// console.log(postsData)

  return (
    <div className="homeCryptoNews-wrapper container">
      <div className="homeCryptoNews-left">
        <h2 style={{ 'color': 'black' }}>Crypto News</h2>

         {postsData?.results?.map((item, key)=>
         <Link href={`/singlepages/${item.slug}`}>
          <div className="newsContains-wrapper">
          <HomeCrytoNewsContains
             pictures={item.image}
             date={item.created}
             newsTitle={item.title}
             newsText={item.description}
           />
          </div>

          </Link> 
         )}

        <LoadMoreCryptoNews postsData={postsData}/>
      </div>
      {/*homeCryptoNews-left ends here  */}


      <div className="homeCrypttoNews-right">
        <HomeCryptoNewsRight postsData={postsData}/>
      </div>
    </div >
  )
}

export default HomeCryptoNews