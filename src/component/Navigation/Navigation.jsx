import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../Navigation/navigation.module.css';

function Navigation() {
  const [headerData, setHeaderData] = useState()
  const [nuCoinData, setNuCoinData] = useState()

  const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,BNB,SOL,XRP,DOGE&tsyms=USD`;

  const getHeaderData = async () => {
    await axios.get(url)
      .then((response) => {
        const data = response.data;
        setHeaderData(data)
      })
  }

  useEffect(() => {
    getHeaderData();
  }, []);

  //For Nu-coin
  const nuCoinUrl = `https://insidecrypto.news/api/nu-coin/`;

  const getNuCoinData = async () => {
    await axios.get(nuCoinUrl)
      .then((response) => {
        const data = response.data;
        setNuCoinData(data)
      })
  }

  useEffect(() => {
    getNuCoinData();
  }, []);
  return (
    <div style={{ backgroundColor: "lightyellow", display: "flex", position: "fixed", width: "100%", textAlign: "center", alignItems: "center", justifyContent: "center", zIndex: 12 }}>
      <ul style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
        <li>
          <div className={styles.currency}>
            <span className={styles.text}>BTC</span>
            <span className={styles.price}>
              ${headerData?.RAW?.BTC?.USD?.PRICE}
            </span>
            {headerData?.RAW?.BTC?.USD?.CHANGEDAY >= 0 ? (
              <span className={styles.perc}>
                {parseFloat(headerData?.RAW?.BTC?.USD?.CHANGEDAY).toFixed(2)}
              </span>
            ) : (
              <span className={styles.percentage}>
                {parseFloat(headerData?.RAW?.BTC?.USD?.CHANGEDAY).toFixed(2)}
              </span>
            )}
          </div>
        </li>
        <li>
          <div className={styles.currency}>
            <span className={styles.text}>ETH</span>
            <span className={styles.price}>
              ${headerData?.RAW?.ETH?.USD?.PRICE}
            </span>
            {headerData?.RAW?.ETH?.USD?.CHANGEDAY >= 0 ? (
              <span className={styles.perc}>
                {parseFloat(headerData?.RAW?.ETH?.USD?.CHANGEDAY).toFixed(2)}
              </span>
            ) : (
              <span className={styles.percentage}>
                {parseFloat(headerData?.RAW?.ETH?.USD?.CHANGEDAY).toFixed(2)}
              </span>
            )}
          </div>
        </li>
        <li>
          <div className={styles.currency}>
            <span className={styles.text}>BNB</span>
            <span className={styles.price}>
              ${headerData?.RAW?.BNB?.USD?.PRICE}
            </span>
            {headerData?.RAW?.BNB?.USD?.CHANGEDAY >= 0 ? (
              <span className={styles.perc}>
                {parseFloat(headerData?.RAW?.BNB?.USD?.CHANGEDAY).toFixed(2)}
              </span>
            ) : (
              <span className={styles.percentage}>
                {parseFloat(headerData?.RAW?.BNB?.USD?.CHANGEDAY).toFixed(2)}
              </span>
            )}
          </div>
        </li>
        <li>
          <div className={styles.currency}>
            <span className={styles.text}>SOL</span>
            <span className={styles.price}>
              ${headerData?.RAW?.SOL?.USD?.PRICE}
            </span>
            {headerData?.RAW?.SOL?.USD?.CHANGEDAY >= 0 ? (
              <span className={styles.perc}>
                {parseFloat(headerData?.RAW?.SOL?.USD?.CHANGEDAY).toFixed(2)}
              </span>
            ) : (
              <span className={styles.percentage}>
                {parseFloat(headerData?.RAW?.SOL?.USD?.CHANGEDAY).toFixed(2)}
              </span>
            )}
          </div>
        </li>
        <li>
          <div className={styles.currency}>
            <span className={styles.text}>XRP</span>
            <span className={styles.price}>
              ${headerData?.RAW?.XRP?.USD?.PRICE}
            </span>
            {headerData?.RAW?.XRP?.USD?.CHANGEDAY >= 0 ? (
              <span className={styles.perc}>
                {parseFloat(headerData?.RAW?.XRP?.USD?.CHANGEDAY).toFixed(2)}
              </span>
            ) : (
              <span className={styles.percentage}>
                {parseFloat(headerData?.RAW?.XRP?.USD?.CHANGEDAY).toFixed(2)}
              </span>
            )}
          </div>
        </li>
        <li>
          <div className={styles.currency}>
            <span className={styles.text}>DOGE</span>
            <span className={styles.price}>
              ${headerData?.RAW?.DOGE?.USD?.PRICE}
            </span>
            {headerData?.RAW?.DOGE?.USD?.CHANGEDAY >= 0 ? (
              <span className={styles.perc}>
                {parseFloat(headerData?.RAW?.DOGE?.USD?.CHANGEDAY).toFixed(2)}
              </span>
            ) : (
              <span className={styles.percentage}>
                {parseFloat(headerData?.RAW?.DOGE?.USD?.CHANGEDAY).toFixed(2)}
              </span>
            )}
          </div>
        </li>
        <li>
          {nuCoinData?.results?.map((item, index) => (
            <div key={index} className={styles.currency}>
              <span className={styles.text}>{item?.name}</span>
              <span className={styles.price}>{item?.price_rate}</span>
              {parseFloat(item?.price_change) >= 0 ?
                <span className={styles.perc}>{parseFloat(item?.price_change).toFixed(2)}</span>
                :
                <span className={styles.percentage}>{parseFloat(item?.price_change).toFixed(2)}</span>
              }
            </div>
          ))}
        </li>
      </ul>

      {/* this will be visible at mobile responsive only*/}
      <div className="invisiblesection">
        <li>
          <div className="img-holder">
            <img src="https://cdn.shortpixel.ai/spai/ret_img/https://cryptopotato.com/wp-content/plugins/cryptocurrency-price-ticker-widget-pro/assets/coin-logos/bitcoin.svg" alt="" />
          </div>
          <span className='boldname'>BTC</span>
          <span>$20,736.00</span>
        </li>
        <li>
          <div className="img-holder">
            <img src="https://cdn.shortpixel.ai/spai/ret_img/https://cryptopotato.com/wp-content/plugins/cryptocurrency-price-ticker-widget-pro/assets/coin-logos/ethereum.svg" alt="" />
          </div>
          <span className='boldname'>ETH</span>
          <span>$1.183.22</span>
        </li>
      </div>
    </div>
  )
}

export default Navigation