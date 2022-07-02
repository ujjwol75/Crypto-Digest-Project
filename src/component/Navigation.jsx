import React from 'react';
import Link from 'next/link';

function Navigation() {
  return ( 
    <div className="navigation container">
        <ul className='headlist-wrappper'> 
            <li>
            <Link href="/marketupdates">
                  Market Updates
                </Link>
            </li>
            <li>
            <Link href="/bct">
                  BTC Analysis
                </Link>
            </li>
            <li>
            <Link href="/margintrading">
                  ETH Analysis
                </Link>
            </li>
            <li>
            <Link href="/margintrading">
                  XRP Analysis
                </Link>
            </li>
            <li>
            <Link href="/margintrading">
                  Interviews
                </Link>
            </li>
            <li>
            <Link href="/margintrading">
                  Crypto Fund
                </Link>
            </li>
          </ul> 

          {/* this will be visible at mobile responsive only*/}
          <div className="invisiblesection">
               <li>
                <div className="img-holder">
                  <img src="https://cdn.shortpixel.ai/spai/ret_img/https://cryptopotato.com/wp-content/plugins/cryptocurrency-price-ticker-widget-pro/assets/coin-logos/bitcoin.svg" alt="" />
                </div>
                <span className='boldname'>BTC</span>
                <span>$20,736.00</span>
               </li>
               <li>
               <div className="img-holder">
                  <img src="https://cdn.shortpixel.ai/spai/ret_img/https://cryptopotato.com/wp-content/plugins/cryptocurrency-price-ticker-widget-pro/assets/coin-logos/ethereum.svg" alt="" />
                </div>
                <span className='boldname'>ETH</span>
                <span>$1.183.22</span>
               </li>
            </div>
    </div>
  )
}

export default Navigation