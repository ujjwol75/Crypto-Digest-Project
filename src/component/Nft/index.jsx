import Link from 'next/link';
import React from 'react'
import LatestCryptoNewsContains from '../cryptoNews/LatestCryptoNewsContains'

const index = (props) => {
  const { data } = props;
  return (
    <div className="cryptoNewsWrapper container">
      <div className="homeCryptoNews-left">
        <h2 className='thintitle'>NFT News</h2>

        {data?.results?.map((item, key) =>
          <Link href={`/singlepages/${item.slug}`} key={key}>
            <a>
              <LatestCryptoNewsContains
                pictures={item.preview_image}
                date={item.created_at}
                newsTitle={item.title}
                newsText={item.description}
              />
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}

export default index