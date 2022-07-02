import React, { useState } from 'react';
import Link from 'next/link';
import { IoIosArrowDropleft, IoIosArrowDropright } from 'react-icons/io';
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

  // for pagination
  const [page, setPage] = useState(1);
  const previouspage = () => {
    setPage(page - 1);
  }
  const nextpage = () => {
    setPage(page + 1);
  }

  const {data:paginationData}=useGetHook({
    queryKey:`paginationData${page}`,
    url:`${APIs.posts}?page=${page}`
  })
  //forpagination ends here

  return (
    <div className="cryptoNewsWrapper container">
      <div className="homeCryptoNews-left">
        <CryptoNewsDetails />
        <h2 className='thintitle'>The Latest Crypto News</h2>

        {paginationData?.results?.map((item, key) =>
          <Link href={`/singlepages/${item.slug}`}>
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
        {/* for pagination */}
        <div className="pagination">
          <div className="paginationLeft" onClick={previouspage}><IoIosArrowDropleft /></div>
          <div className="paginationRight" onClick={nextpage}><IoIosArrowDropright /></div>
        </div>
        {/* for pagination ends here*/}
      </div>
      <div className="homeCrypttoNews-right">
        <HomeCryptoNewsRight postsData={postsData} />
        <SubscribeForm />
      </div>
    </div>
  )
}

export default CryptoNewsWrapper