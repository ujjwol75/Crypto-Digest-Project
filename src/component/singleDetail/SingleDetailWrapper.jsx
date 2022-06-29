import React from 'react'
import HomeCryptoNewsRight from '../home/HomeCryptoNewsRight';
import Singledetailhead from './Singledetailhead';

function SingleDetailWrapper() {
    return (
        <div className="singleDetail-wrapper container">
            <div className="homeCryptoNews-left">
                <div className="iframe-holder2">
                    <iframe src="https://cdn.coinzilla.io/html_customers/0bb3c17b3cadaf2b18ab28b9d3486e15/index.html"
                        width="100%" height="100%" frameBorder="0" scrolling="no"></iframe>
                </div>
                <Singledetailhead/>
            </div>
            <div className="homeCrypttoNews-right">
                <HomeCryptoNewsRight/>
            </div>
        </div>
    )
}

export default SingleDetailWrapper;