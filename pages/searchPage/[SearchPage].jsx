import React from 'react';
import { APIs } from '../api/hello';
import {getApiData} from "../../src/helper/AxiosInstance";
import SearchPageWrapper from '../../src/component/searchpage/SearchPageWrapper';

function SearchPage(props) {
    return (
        <SearchPageWrapper data={props?.searchPageData}/>
    )
}

export default SearchPage;

export async function getServerSideProps({params}) {
    const {SearchPage} = params
    const url =  `${APIs.posts}?search=${SearchPage}`
    const searchPageData = await getApiData(url)
    return {
      props: {
        searchPageData: searchPageData?.data
      }, // will be passed to the page component as props
    }
  }