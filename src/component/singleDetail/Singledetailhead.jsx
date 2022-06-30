import React from 'react';
import { GoPrimitiveDot } from 'react-icons/go';
import ScrabbedCards from '../scrabbedData/ScrabbedCards';
import useGetHook from '../../customHooks/useGetHooks';
import { APIs } from '../../../pages/api/hello';

function Singledetailhead(props) {
    const { isLoading: postsLoading, data: postsData } = useGetHook(
        {
            queryKey: 'postsData',
            url: APIs?.posts
        }
    );

    return (
        <div className="Singledetailhead">
            <h2 style={{ 'color': 'black' }}>{props.title}</h2>
            <div className="marginTrading-profile">
                <div className="img-holder">
                    <img src="https://secure.gravatar.com/avatar/f171758ec90baaed75fea6b55fb77d03?s=75&d=mm&r=g" alt="" />
                </div>
                <div className="profile-text">
                    <span>Author:</span>
                    <span>{props.authorName}</span>
                    <span><GoPrimitiveDot />{props.date}</span>
                </div>
            </div>

            <p className='singledetailbold-text'>{props.slug}</p>

            <div
                dangerouslySetInnerHTML={{
                    __html: props?.content?.slice(0, props.contentlength),
                }}
            />

            <h2 style={{ 'color': 'black' }}>You Might Also Like:</h2>

            <div className="singleDetailCards">
                {postsData?.results?.slice(0,3).map((item, key) =>
                    <ScrabbedCards
                        pictures={item.image}
                        caption={item.title}
                    />
                )}
            </div>
        </div>
    )
}

export default Singledetailhead;