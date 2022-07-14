import React, { useState } from 'react';
import { IoIosArrowUp } from 'react-icons/io';

function Footer() {
    return (
        <div className="footer container">
            <div className="footer-wrapper">
                <div className="footer-disclaimer">
                    <h5 className="footer-title">About</h5>
                    <div className="links">
                        All content on thecryptodigest.news is provided solely for roduct, service or investment. The opinions expressed in this Site do not constitute investment.
                    </div>
                </div>
                <div className="footer-about">
                    <h5 className="footer-title">MORE SECTIONS</h5>

                    <div className="links">
                        {/* <a href="">Advertise on CryptoDigest</a> */}
                        <ul className='footerlinks'>
                            <li><a href="/">Home </a></li>
                            <li><a href="/cryptoNews"> News </a></li>
                            <li><a href="/contact"> Contact Us </a></li>
                        </ul>
                    </div>
                    <ul className='footerlinks'>
                        <li><a href="/marketLivePage">Market Analysis</a></li>

                    </ul>
                </div>

                <div className="footer-disclaimer">
                    <h5 className="footer-title">DISCLAIMER</h5>
                    <div className="links">
                        According to the latest crypto news, there are thousands of cryptocurrencies in existence. However, the most popular ones include Bitcoin, Ethereum, Ripple, Binance Coin, Bitcoin Cash, Tezos, Tron, Litecoin, and EOS, acquire more than 80% of the total market cap.
                        <a href="/cryptoNews">Full disclaimer</a>
                    </div>
                </div>
            </div>
            <p className='copyright'>&copy; The Crypto Digest™ COPYRIGHT © 2017 - 2022 . ALL RIGHTS RESERVED. &nbsp;</p>
        </div>
    )
}

export default Footer