import React from 'react';
import LatestCryptoNewsContains from '../cryptoNews/LatestCryptoNewsContains';

function SearchPageWrapper(props) {
  // console.log("abcd",props.data);
  return (
    <div className="searchPage container">
      {props?.data?.results?.map((item,key)=>
         <LatestCryptoNewsContains
         pictures={item.image}
         date={item.date}
         newsTitle={item.title}
         newsText={item.description}
       />
      )}
     
    </div>
  )
}

export default SearchPageWrapper;