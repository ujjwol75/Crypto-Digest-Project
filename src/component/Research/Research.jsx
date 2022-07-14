import React from 'react';
import Link from 'next/link';
import HomeCrytoNewsContains from '../home/HomeCrytoNewsContains';


const Research = (props) => {

  return (
    <>
      <div className="homeCryptoNews-wrapper container">
        <div className="homeCryptoNews-left">
          <h2 style={{ 'color': 'black' }}>Research News</h2>

          {props?.singlePageData?.results?.map((item, key) =>
            <Link href={`/singlepages/${item.slug}`} key={key}>
              <div className="newsContains-wrapper">
                <HomeCrytoNewsContains
                  pictures={item.image}
                  date={item.created}
                  newsTitle={item.title}
                  newsText={item.description}
                />
              </div>

            </Link>
          )}

          {/* <LoadMoreCryptoNews postsData={postsData}/> */}
        </div>

      </div >

    </>
  );
};

export default Research;
