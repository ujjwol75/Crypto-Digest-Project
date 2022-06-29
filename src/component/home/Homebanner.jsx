import React from 'react';
import Link from 'next/link';
import useGetHook from '../../customHooks/useGetHooks';
import { APIs } from '../../../pages/api/hello';

function Homebanner() {
    const { isLoading: bannerImageLoading, data: bannerImageData } = useGetHook(
        {
            queryKey: 'bannerImageData',
            url: APIs?.bannerImage
        }
    );

    console.log("bannerImageData", bannerImageData?.results[0]);

    return (
        <div className="homebanner container">
            <div className="bannerupper">
                <div className="img-holder">
                    <img src="https://servedbyadbutler.com/getad.img/;libID=3508746" alt=" images" />
                </div>
            </div>
            {/* bannerupper ends here */}

            <div className="bannerlower">
                <div className="bannerlower-left">
                    <Link href={`/singlepages/${bannerImageData?.results[0]?.id}`}>
                        <div className="img-holder2 banner-img">
                            <img src={bannerImageData?.results[0]?.image} alt="" />
                            {/* <img src="https://cdn.shortpixel.ai/spai/w_619+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/2021/03/polygon_logo_cover.jpg" alt="" /> */}
                            <div className="post-content">
                                <h2>Bitcoin Defends $20K Amid Enhanced Volatility, Polygon Skyrockets 25% (Market Watch)</h2>
                                <span>Jun 23, 2022</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="bannerlower-right">
                    <div className="bannerlower-right-top">
                        <div className="img-holder3 banner-img">
                            <img src="https://cdn.shortpixel.ai/spai/w_713+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/2020/10/bitcoin_dark_cover.jpg" alt="" />
                            <div className="post-content">
                                <h2>The Largest Investors' Realized Loss in Bitcoin History Just Happened, But There's Good News</h2>
                                <span>Jun 20, 2022</span>
                            </div>
                        </div>
                    </div>

                    <div className="bannerlower-right-bottom">
                        <div className="bannerlower-right-bottom-left">
                            <div className="img-holder4 banner-img">
                                <img src="https://cdn.shortpixel.ai/spai/w_283+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/2020/10/bears_cover.jpg" alt="" />
                                <div className="post-content">
                                    <h2 className='small-h2'>Celsius Drama, 3AC Insolvency Rumors, Bitcoin Amid $20K: This Week's Crypto Recap</h2>
                                    <span>Jun 17, 2022</span>
                                </div>
                            </div>
                        </div>
                        <div className="bannerlower-right-bottom-right">
                            <div className="img-holder5 banner-img">
                                <img src="https://cdn.shortpixel.ai/spai/w_428+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/2021/09/BitcoinFear.jpg" alt="" />
                                <div className="post-content">
                                    <h2 className='small-h2'>Bitcoin Fear and Greed Index Dumps to Lowest Levels Since the COVID-19 Crash</h2>
                                    <span>Jun 15, 2022</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* bannerlower ends here */}
        </div>
    )
}

export default Homebanner;