import React from 'react';
import Link from 'next/link';
import HomeCryptoNewsRight from '../home/HomeCryptoNewsRight';
import Singledetailhead from './Singledetailhead';
import useGetHook from '../../customHooks/useGetHooks';
import { APIs } from '../../../pages/api/hello';

function SingleDetailWrapper({ singlePostsData }) {


    const { isLoading: postsLoading, data: postsData } = useGetHook(
        {
            queryKey: 'postsData',
            url: APIs?.posts
        }
    );
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
            </div>
            <div className="homeCrypttoNews-right">
                <HomeCryptoNewsRight postsData={postsData} />
            </div>
        </div>
    )
}

export default SingleDetailWrapper;