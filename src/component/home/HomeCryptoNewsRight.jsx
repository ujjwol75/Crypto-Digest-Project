import React from 'react';
import Link from 'next/link';
import HomeCryptoNewsRightContains from './HomeCryptoNewsRightContains'
import SocialShare from '../SocialShare/SocialShare';

function HomeCryptoNewsRight({ postsData }) {
  return (
    <>
      <div className="socialmedia">
        <div className="gifsection">
          <span>Social Shares</span>
          <SocialShare />
        </div>

      </div>
      <div className="cryptoNewsRightImages">
        <Link href={`/singlepages/${postsData?.results[0]?.slug}`}>
          <div className="img-holder">
            <img src={postsData?.results[5]?.image} alt="" />
          </div>
        </Link>
        <div className='short-title'>
          <span>Editorials</span>
        </div>

        {postsData?.results?.map((item, key) =>
          <Link href={`/singlepages/${postsData?.results[0]?.slug}`} key={key}>
            <a>
              <HomeCryptoNewsRightContains
                pictures={item.image}
                text={item.slug}
                key={key}
              />
            </a>
          </Link>
        )}
      </div>
    </>
  )
}

export default HomeCryptoNewsRight