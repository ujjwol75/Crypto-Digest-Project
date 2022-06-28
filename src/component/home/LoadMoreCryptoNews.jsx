import React from 'react';
import PriceAnalysis from './PriceAnalysis';
import ReleaseSectionContain from './ReleaseSectionContain';
import HomeCrytoNewsContains from './HomeCrytoNewsContains';

function LoadMoreCryptoNews() {
  return (
    <div className="loadMoreCryptoNews">
      <div className="morecryptonews-title">
        <button className='morecryptonews-button'>LOAD MORE CRYPTO NEWS</button>
      </div>
      <div className="loadMoreCryptoNews-content">
        <div className='short-title bigsize' style={{ margin: 0 }}>
          <span>Press Releases</span>
        </div>
        <div className="releaseSection">
          <ReleaseSectionContain
            pictures="https://cdn.shortpixel.ai/spai/w_165+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/KBW-3fvx8z8zdfrk7k99azl9u2.jpg"
            caption="Korea Blockchain Week to Hold First Live Event in Seoul After Covid Hiatus"
          />
          <ReleaseSectionContain
            pictures="https://cdn.shortpixel.ai/spai/w_165+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/Bitcasino-3fvx64ldweapnxezm9jklm.jpeg"
            caption="Bitcasino Launches World Cup Campaign with Raffle Prizes, Including VIP Match Tickets"
          />
          <ReleaseSectionContain
            pictures="https://cdn.shortpixel.ai/spai/w_165+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/IOEN-3fvx5h3ijomhyutyl9yyh6.jpg"
            caption="Redgrid and IOEN Bring the Solarminer to California"
          />
          <ReleaseSectionContain
            pictures="https://cdn.shortpixel.ai/spai/w_165+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/Phala_World-3fvx4fs2msbkkg517027t6.jpg"
            caption="Phala Network Releases First Soulbound Token Use Case With PhalaWorld"
          />
        </div>
        <div className='short-title bigsize' style={{ margin: 0 }}>
          <span>Crypto Price Analysis</span>
        </div>

        <div className="priceAnalysisSection">
          <PriceAnalysis
            date="JUN 23, 2022"
            pricehead="Bitcoin (BTC)"
            pictures="https://cdn.shortpixel.ai/spai/w_165+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/BTCUSDT-Daily-Jun-23-2022-scaled-3fvr2tf6y45xcvbc24nabu.jpg"
            caption="This is the Level BTC Needs to Break to Reverse the Downtrend (Bitcoin Price Analysis)"
          />
          <PriceAnalysis
            date="JUN 23, 2022"
            pricehead="Ethereum (ETH)"
            pictures="https://cdn.shortpixel.ai/spai/w_165+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/ETHUSDT-Daily-23rd-June-min-3fvr63s7lq9bakgkw4sy6i.png"
            caption="ETH Price Analysis: Ethereum Reclaims $1,000 But is The Worst Over?"
          />
          <PriceAnalysis
            date="JUN 22, 2022"
            pricehead="Ripple (XRP)"
            pictures="https://cdn.shortpixel.ai/spai/w_165+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/XRPUSDT-Daily-22nd-June-min-3fvif4tdo3yqoojsofn9qi.jpg"
            caption="XRP Price Analysis: Buyers Show Weakness but Will Ripple Face Another Sell-Off?"
          />
          <PriceAnalysis
            date="JUN 21, 2022"
            pricehead="More Coins"
            pictures="https://cdn.shortpixel.ai/spai/w_165+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/ADAUSDT_2022-06-21_16-11-56-3fva4sxztj20y3nsyzzxmy.png"
            caption="Cardano Price Analysis: ADA Recovers 20% in Days, Here’s the Next Target"
          />
        </div>

        <div className='short-title bigsize' style={{ margin: 0 }}>
          <span>Crypto Projects</span>
        </div>

        <div className="cryptoProjectSection">
        <HomeCrytoNewsContains
           pictures="https://cdn.shortpixel.ai/spai/w_225+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/nftmaker_cover-3fvox98rs46plmjewx6bd6.jpg"
           date="JUN 23, 2022 06:53"
           newsTitle="NFT-MAKER: Making Non-Fungible Tokens More Accessible"
        />
        <HomeCrytoNewsContains
           pictures="https://cdn.shortpixel.ai/spai/w_108+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/Digram-3-4-3fv0z5zxu9lkf5t4fuwv7u.jpg"
           date="JUN 23, 2022 06:53"
           newsTitle="NFT-MAKER: Making Non-Fungible Tokens More Accessible"
        />
         <HomeCrytoNewsContains
           pictures="https://cdn.shortpixel.ai/spai/w_108+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/cexio_cover-3fvimyirzvibg8nuf335ze.jpg"
           date="JUN 23, 2022 06:53"
           newsTitle="NFT-MAKER: Making Non-Fungible Tokens More Accessible"
        />
         <HomeCrytoNewsContains
           pictures="https://cdn.shortpixel.ai/spai/w_108+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/cardalonia_cover-3fubbs850cuj0ruyxmysqy.jpg"
           date="JUN 23, 2022 06:53"
           newsTitle="NFT-MAKER: Making Non-Fungible Tokens More Accessible"
        />
        <HomeCrytoNewsContains
           pictures="https://cdn.shortpixel.ai/spai/w_108+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/1-4-3fv4vqito2ipoznaaxyw3u.jpg"
           date="JUN 23, 2022 06:53"
           newsTitle="NFT-MAKER: Making Non-Fungible Tokens More Accessible"
        />
        <HomeCrytoNewsContains
           pictures="https://cdn.shortpixel.ai/spai/w_108+q_lossless+ret_img+to_webp/https://cryptopotato.com/wp-content/uploads/thumbs/Неозаглавен-дизайн-13-3fu2rvtnvifgx68h2ydjwq.jpg"
           date="JUN 23, 2022 06:53"
           newsTitle="NFT-MAKER: Making Non-Fungible Tokens More Accessible"
        />
        </div>

      </div>
    </div>
  )
}

export default LoadMoreCryptoNews;