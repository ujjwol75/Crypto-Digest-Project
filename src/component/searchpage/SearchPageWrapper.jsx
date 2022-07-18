import React from 'react';
import LatestCryptoNewsContains from '../cryptoNews/LatestCryptoNewsContains';

function SearchPageWrapper(props) {

  return (
    <div className="searchPage container">
      {props?.data?.results?.length ?
        <>
          {props?.data?.results?.map((item, key) =>
            <LatestCryptoNewsContains
              pictures={item.image}
              date={item.date}
              newsTitle={item.title}
              newsText={item.description}
            />
          )}
        </>
        :
        <h2>NO search results found</h2>
      }

    </div>
  )
}

export default SearchPageWrapper;