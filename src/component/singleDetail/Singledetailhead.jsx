import React from 'react';
import Link from 'next/link';
import { GoPrimitiveDot } from 'react-icons/go';

function Singledetailhead() {
  return (
    <div className="Singledetailhead">
           <ul className="margintradingdetailsLinks">
                <li>
                    <Link href="/">HOME&gt;&gt;</Link>
                </li>
                <li>
                    <Link href="/guides"> GUIDES&gt;&gt;</Link>
                </li>
                <li>
                    BITCOIN MARGIN TRADING GUIDE &amp; BEST EXCHANGES (2021 UPDATED)
                </li>
            </ul>
            <h2 style={{ 'color': 'black' }}>Bitcoin Margin Trading Guide &#38; Best Exchanges (2021 Updated)</h2>
            <div className="marginTrading-profile">
                <div className="img-holder">
                    <img src="https://secure.gravatar.com/avatar/f171758ec90baaed75fea6b55fb77d03?s=75&d=mm&r=g" alt="" />
                </div>
                <div className="profile-text">
                    <span>Author:</span>
                    <span> Yuval Gov</span>
                    <span><GoPrimitiveDot />Last Updated Nov 11, 2021 @ 17:34</span>
                </div>
            </div>
            <p className='singledetailbold-text'>The market-wide volatility has also put a notable strain on the derivatives market.
                     Binance, for one, has managed to lead the space.</p>
    </div>
  )
}

export default Singledetailhead;