import React from 'react';
import Link from 'next/link';
import HomeCryptoNewsRightContains from './HomeCryptoNewsRightContains'

function HomeCryptoNewsRight({ postsData }) {
  return (
    <>
      <div className="cryptoNewsRightImages">
        <div className='short-title'>
          <span>Editorials</span>
        </div>

        {postsData?.results?.map((item, key) =>
          <Link href={`/singlepages/${item?.slug}`} key={key}>
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