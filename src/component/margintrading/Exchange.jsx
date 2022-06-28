import React from 'react';
import Link from 'next/link';

function Exchange() {
    return (
        <div className='exchange-wrapper'>
            <div className='corner-ribbon top-left yellow shadow'>
                <span style={{ "font-size": "10px" }}>FREE $100</span>
            </div>
            <div className='exchange-image'>
            <Link href="/abc">
                <div className="img-holder">
                    <img src="https://cdn.shortpixel.ai/spai/w_80+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/2019/10/binance_logo-100x100.png" alt="" />
                    <span>Binance Futures</span>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default Exchange