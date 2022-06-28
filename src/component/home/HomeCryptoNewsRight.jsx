import React from 'react'
import HomeCryptoNewsRightContains from './HomeCryptoNewsRightContains'

function HomeCryptoNewsRight() {
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
          <div className="img-holder">
            <img src="https://servedbyadbutler.com/getad.img/;libID=3508747" alt="" />
          </div>
          <div className='short-title'>
            <span>Editorials</span>
          </div>
          <HomeCryptoNewsRightContains
            pictures={"https://cdn.shortpixel.ai/spai/w_300+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/nft-3fvjahrw6z1p4kb0gnso3u.jpg"}
            text="Over 33% of NFT Volume is Wash Trading: bitsCrunch CEO Interview"
          />
          <HomeCryptoNewsRightContains
            pictures="https://cdn.shortpixel.ai/spai/w_300+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/celsius_cover-3e8ozll6x5kspz8h4sgcne.jpg"
            text="What’s Going on With Celsius Network and Why Is It a Huge Risk for Crypto (Opinion)"
          />
          <HomeCryptoNewsRightContains
            pictures="https://cdn.shortpixel.ai/spai/w_300+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/ConsenSys-min-3c4dxwih6hvsz33cdoi70q.jpg"
            text="Institutions Are Definitely Here: ConsenSys’ Harriet Browning (Interview)"
          />
          <HomeCryptoNewsRightContains
            pictures="https://cdn.shortpixel.ai/spai/w_300+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/binance_visa_card-3fnly2z2ynrr525hh11gqy.jpg"
            text="Binance Visa Card Guide: Read Before You Order"
          />
          <HomeCryptoNewsRightContains
            pictures="https://cdn.shortpixel.ai/spai/w_300+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/Jean-Baptiste-Graftieaux-3fl9rjgugfvnilgqp60nbe.jpg"
            text="Bitstamp CEO JB Graftieaux: We Are Still Early (Interview)"
          />
          <HomeCryptoNewsRightContains
            pictures="https://cdn.shortpixel.ai/spai/w_300+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/okaybears_cover-3fn596tgklewl1xzuehfre.jpg"
            text="Okay Bears NFT Collection: The Complete Guide"
          />
          <HomeCryptoNewsRightContains
            pictures="https://cdn.shortpixel.ai/spai/w_300+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/Untitled-design-5-3flj1bk50sk0twxpm2huru.jpg"
            text="Our Ambition is to Become the Amazon of Crypto: Interview with Coinbase’s Guillaume Chatain"
          />
          <div className='iframe-holder'>
          <iframe src="https://cdn.coinzilla.io/html_customers/789f8b324efbc48cd8e886c24c7de33c/index.html" 
          width="100%" height="100%" frameBorder="0" scrolling="no"></iframe>
          </div>
        </div>
    </>
  )
}

export default HomeCryptoNewsRight