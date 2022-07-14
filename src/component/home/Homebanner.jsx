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
    // console.log("bannerImageData", bannerImageData?.results[0]);

    const { isLoading: postsLoading, data: postsData } = useGetHook(
        {
            queryKey: 'postsData',
            url: APIs?.posts
        }
    );
    // console.log(postsData)

    return (
        <div className="homebanner container">

            <div className="bannerlower">
                <div className="bannerlower-left">
                    <Link href={`/singlepages/${postsData?.results[0]?.slug}`}>
                        <div className="img-holder2 banner-img">
                            <img src={postsData?.results[0]?.image} alt="" />
                            <div className="post-content">
                                <h2>{postsData?.results[0]?.title}</h2>
                                <span>{postsData?.results[0]?.created}</span>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="bannerlower-right">
                    <div className="bannerlower-right-top">
                        <Link href={`/singlepages/${postsData?.results[0]?.slug}`}>
                            <div className="img-holder3 banner-img">
                                <img src={postsData?.results[1]?.image} alt="" />
                                <div className="post-content">
                                    <h2>{postsData?.results[1]?.title}</h2>
                                    <span>{postsData?.results[1]?.created}</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="bannerlower-right-bottom">
                        <div className="bannerlower-right-bottom-left">
                        <Link href={`/singlepages/${postsData?.results[0]?.slug}`}>
                            <div className="img-holder4 banner-img">
                                <img src={postsData?.results[2]?.image} alt="" />
                                <div className="post-content">
                                    <h2>{postsData?.results[2]?.title}</h2>
                                    <span>{postsData?.results[2]?.created}</span>
                                </div>
                            </div>
                        </Link>    
                        </div>
                        <div className="bannerlower-right-bottom-right">
                        <Link href={`/singlepages/${postsData?.results[0]?.slug}`}>
                            <div className="img-holder5 banner-img">
                                <img src={postsData?.results[3]?.image} alt="" />
                                <div className="post-content">
                                    <h2>{postsData?.results[3]?.title}</h2>
                                    <span>{postsData?.results[3]?.created}</span>
                                </div>
                            </div>
                        </Link>    
                        </div>
                    </div>
                </div>
            </div>
            {/* bannerlower ends here */}
        </div>
    )
}

export default Homebanner;