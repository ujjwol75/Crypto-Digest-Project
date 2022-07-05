import React from 'react';
import Link from 'next/link';
import HomeCryptoNewsRightContains from './HomeCryptoNewsRightContains'

function HomeCryptoNewsRight({postsData}){
  return (
    <>
      <div className="socialmedia">
        <div className="gifsection">
          <div className="gif1-holder">
            <img src="https://servedbyadbutler.com/getad.img/;libID=3501223" alt="" />
          </div>
          <div className="bitcoins">
            <li>
              <div className="img-holder">
                <img src="https://cdn.shortpixel.ai/spai/ret_img/https://cryptopotato.com/wp-content/plugins/cryptocurrency-price-ticker-widget-pro/assets/coin-logos/bitcoin.svg" alt="" />
              </div>
              <span>$21,450.00</span>
            </li>
            <li>
              <div className="img-holder">
                <img src="https://cdn.shortpixel.ai/spai/ret_img/https://cryptopotato.com/wp-content/plugins/cryptocurrency-price-ticker-widget-pro/assets/coin-logos/ethereum.svg" alt="" />
              </div>
              <span>$21,450.00</span>
            </li>
          </div>
        </div>

        <div className='short-title' style={{ margin: 0 }}>
          <span>Join Our Community</span>
        </div>
        <div className="socialmediaIcon-wrapper">
          <div className="socialmediaIcon">
            <div className="icon-holder">
              <img src="https://cdn.shortpixel.ai/spai/w_40+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/social/facebook.png" alt="" />
            </div>
          </div>
          <div className="socialmediaIcon">
            <div className="icon-holder">
              <img src="https://cdn.shortpixel.ai/spai/w_40+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/social/twitter.png" alt="" />
            </div>
          </div>
          <div className="socialmediaIcon">
            <div className="icon-holder">
              <img src="https://cdn.shortpixel.ai/spai/w_40+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/social/youtube.png" alt="" />
            </div>
          </div>
          <div className="socialmediaIcon">
            <div className="icon-holder">
              <img src="https://cdn.shortpixel.ai/spai/w_40+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/social/telegram.png" alt="" />
            </div>
          </div>
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
          <Link href={`/singlepages/${postsData?.results[0]?.slug}`}>
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