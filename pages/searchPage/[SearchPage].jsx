import React from 'react';
import useGetHook from '../../src/customHooks/useGetHooks';
import { APIs } from '../api/hello';
import { useRouter } from 'next/router';
import SearchPageWrapper from '../../src/component/searchpage/SearchPageWrapper';

function SearchPage() {
    const router = useRouter();
    const { SearchPage } = router?.query

    // console.log('SearchPage', SearchPage);

    const { isLoading: searchListLoader, data: searchPageData, isError, } = useGetHook({
        queryKey: `searchPageData${SearchPage}`,
        url: `${APIs.posts}?search=${SearchPage}`,
    });

    // console.log('searchPageData', searchPageData)

    return (
        <SearchPageWrapper data={searchPageData}/>
    )
}

export default SearchPage;