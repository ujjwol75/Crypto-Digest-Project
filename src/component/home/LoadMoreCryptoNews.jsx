import React from 'react';
import Link from 'next/link';
import PriceAnalysis from './PriceAnalysis';
import ReleaseSectionContain from './ReleaseSectionContain';
import HomeCrytoNewsContains from './HomeCrytoNewsContains';

function LoadMoreCryptoNews({ postsData }) {
  // console.log("bacd",postsData?.results);
  return (
    <div className="loadMoreCryptoNews">
      <div className="morecryptonews-title">
      <Link href='/cryptoNews'>
        <button className='morecryptonews-button'>LOAD MORE CRYPTO NEWS</button>
      </Link>  
      </div>
      <div className="loadMoreCryptoNews-content">
        <div className='short-title bigsize' style={{ margin: 0 }}>
          <span>Press Releases</span>
        </div>
        <div className="releaseSection">
          {postsData?.results?.slice(0, 4).map((item, key) =>
            <Link href={`/singlepages/${item.slug}`} key={key}>
              <div className="releaseSectionContain">
                <ReleaseSectionContain
                  pictures={item.image}
                  caption={item.title}
                />
              </div>
            </Link>
          )}
        </div>
        <div className='short-title bigsize' style={{ margin: 0 }}>
          <span className='categoriesHead'>Crypto Price Analysis</span>
        </div>

        <div className="priceAnalysisSection">
          {postsData?.results?.slice(4, 8).map((item, key) =>
            <Link href={`/singlepages/${item.slug}`} key={key}>
              <div className="priceAnalysis">
                <PriceAnalysis
                  date={item.created}
                  pricehead={item.name}
                  pictures={item.image}
                  caption={item.title}
                />
              </div>
            </Link>
          )}
        </div>

        <div className='short-title bigsize' style={{ margin: 0 }}>
          <span className='categoriesHead'>Crypto Projects</span>
        </div>

        <div className="cryptoProjectSection">
          {postsData?.results?.slice(0, 6).map((item, key) =>
            <Link href={`/singlepages/${item.slug}`} key={key}>
              <div className="newsContains-wrapper">
                <HomeCrytoNewsContains
                  pictures={item.image}
                  date={item.created}
                  newsTitle={item.title}
                />
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default LoadMoreCryptoNews;