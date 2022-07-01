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
        <button className='morecryptonews-button'>LOAD MORE CRYPTO NEWS</button>
      </div>
      <div className="loadMoreCryptoNews-content">
        <div className='short-title bigsize' style={{ margin: 0 }}>
          <span>Press Releases</span>
        </div>
        <div className="releaseSection">
          {postsData?.results?.slice(0,4).map((item, key) =>
                <ReleaseSectionContain
                  pictures={item.image}
                  caption={item.title}
                />
          )}
        </div>
        <div className='short-title bigsize' style={{ margin: 0 }}>
          <span>Crypto Price Analysis</span>
        </div>

        <div className="priceAnalysisSection">
          {postsData?.results?.slice(4,8).map((item, key) =>
                <PriceAnalysis
                  date={item.created}
                  pricehead={item.name}
                  pictures={item.image}
                  caption={item.title}
                />
          )}
        </div>

        <div className='short-title bigsize' style={{ margin: 0 }}>
          <span>Crypto Projects</span>
        </div>

        <div className="cryptoProjectSection">
          {postsData?.results?.slice(0,6).map((item, key) =>
          <HomeCrytoNewsContains
            pictures={item.image}
            date={item.created}
            newsTitle={item.title}
          />
        )}
        </div>
      </div>
    </div>
  )
}

export default LoadMoreCryptoNews;