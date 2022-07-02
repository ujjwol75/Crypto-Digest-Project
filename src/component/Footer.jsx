import React,{useState} from 'react';
import {IoIosArrowUp} from 'react-icons/io';

function Footer() {
    return (
        <div className="footer container">
            <div className="footer-wrapper">
                <div className="footer-about">
                    <h5 className="footer-title">ABOUT</h5>

                    <div className="links">
                        <a href="">Advertise on CryptoPotato</a>
                        <ul className='footerlinks'>
                            <li><a href="">About Us </a></li>
                            <li><a href=""> Contact Us </a></li>
                            <li><a href=""> Careers</a></li>
                        </ul>
                    </div>
                    <ul className='footerlinks'>
                        <li><a href="">Terms of service</a></li>
                        <li><a href="">Privacy Policy </a></li>
                        <li><a href="">GDPR</a></li>
                    </ul>
                </div>
                <div className="footer-moresection">
                    <h5 className="footer-title">MORE SECTIONS</h5>
                    <div className="links">
                        <ul className='footerlinks'>
                            <li><a href="">IEO List </a></li>
                            <li><a href=""> Evaluations </a></li>
                        </ul>
                        <a href="">Airdrops</a>
                        <a href="">Scholarship</a>
                        <ul className='footerlinks'>
                            <li><a href="">Cannabis Stocks News  </a></li>
                            <li><a href="">  Market Analysis</a></li>
                        </ul>
                    </div>
                </div>
                <div className="footer-disclaimer">
                    <h5 className="footer-title">DISCLAIMER</h5>
                    <div className="links">
                        Disclaimer: Information found on CryptoPotato
                        is those of writers quoted. It does not represent the opinions
                        of CryptoPotato on whether to buy, sell, or hold any investments.
                        You are advised to conduct your own research before making any
                        investment decisions. Use provided information at your own risk.
                        <a href="">Full disclaimer</a>
                    </div>
                </div>
            </div>
            <p className='copyright'>&copy; COPYRIGHT CRYPTOPOTATO 2016 &nbsp; - 2021</p>
        </div>
    )
}

export default Footer