import React from 'react';
import Link from 'next/link';
import HomeCryptoNewsRight from '../home/HomeCryptoNewsRight';
import Singledetailhead from './Singledetailhead';


function SingleDetailWrapper({singlePostsData}) {

    // console.log(`hgjhg${SingleDetail}`)
    // console.log(`${APIs.posts}${SingleDetail}`);

    // console.log("aiiiii",singlePostsData);

    // console.log("singlePostsData",singlePostsData)

    return (
        <div className="singleDetail-wrapper container">
            <div className="homeCryptoNews-left">
                <div className="iframe-holder2">
                    <iframe src="https://cdn.coinzilla.io/html_customers/0bb3c17b3cadaf2b18ab28b9d3486e15/index.html"
                        width="100%" height="100%" frameBorder="0" scrolling="no"></iframe>
                </div>
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
                    <Singledetailhead
                        title={singlePostsData?.title}
                        authorName={singlePostsData?.author}
                        date={singlePostsData?.created}
                        content={singlePostsData?.content}
                        slug={singlePostsData?.slug}
                    />
            </div>
            <div className="homeCrypttoNews-right">
                <HomeCryptoNewsRight />
            </div>
        </div>
    )
}

export default SingleDetailWrapper;