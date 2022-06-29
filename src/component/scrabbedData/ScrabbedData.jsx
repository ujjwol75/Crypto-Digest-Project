import React from 'react';
import ScrabbedCards from './ScrabbedCards';
import useGetHook from '../../customHooks/useGetHooks';
import { APIs } from '../../../pages/api/hello';

function ScrabbedData() {
    const { isLoading: postsLoading, data: postsData } = useGetHook(
        {
            queryKey: 'postsData',
            url: APIs?.posts
        }
    );
 console.log("postsData",postsData)

    return (
    <div className="scrabbedData container">
         {postsData?.results?.map((item, key)=>
        <ScrabbedCards
            pictures={item.image}
            caption={item.title}
        />
         )}
    </div>
    )
}

export default ScrabbedData;