import React from 'react';
import Link from 'next/link';
import HomeCryptoNewsRight from '../home/HomeCryptoNewsRight';
import Singledetailhead from './Singledetailhead';
import useGetHook from '../../customHooks/useGetHooks';
import { APIs } from '../../../pages/api/hello';
import SocialShare from '../SocialShare/SocialShare';

function SingleDetailWrapper({ singlePostsData }) {


    const { isLoading: postsLoading, data: postsData } = useGetHook(
        {
            queryKey: 'postsData',
            url: APIs?.posts
        }
    );
    let url = "http://cryptodigest.news/"
    if (typeof window !== "undefined") {
        // Client-side-only code
        url = window.location.href;
    }
    return (
        <div className="singleDetail-wrapper container">
            <div className="homeCryptoNews-left">
                <ul className="margintradingdetailsLinks">
                    <li>
                        <Link href="/">HOME&gt;&gt;</Link>
                    </li>
                    <li>
                        <Link href="/marketLivePage"> Market Analysis&gt;&gt;</Link>
                    </li>
                    <li>
                        BITCOIN MARGIN TRADING GUIDE &amp; BEST EXCHANGES (2021 UPDATED)
                    </li>
                </ul>
                <Singledetailhead
                    title={singlePostsData?.title}
                    authorName={singlePostsData?.author}
                    date={singlePostsData?.created || singlePostsData?.created_at}
                    content={singlePostsData?.content}
                    slug={singlePostsData?.slug}
                />
                <div className="socialmedia">
                    <div className="gifsection">
                        {/* <div className='short-title'> */}
                        <span>Social Shares</span>
                        {/* </div> */}
                        <SocialShare
                            url={url}
                            title={singlePostsData?.title}
                            hashtag={singlePostsData?.title}
                            image={singlePostsData?.image || singlePostsData?.preview_image}
                        />
                    </div>

                </div>
            </div>
            <div className="homeCrypttoNews-right">

                <HomeCryptoNewsRight postsData={postsData}

                />
            </div>
        </div>
    )
}

export default SingleDetailWrapper;