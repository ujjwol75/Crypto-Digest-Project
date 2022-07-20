
import axios from 'axios';
import { useEffect, useState } from 'react';
import styles from '../MarketLivePage/Market.module.css';
const MarketLivePage = () => {

  const [viewAll, setViewAll] = useState(true)
  const [limit, setLimit] = useState(10)
  const [loading, setLoading] = useState(true)

  const [marketListData, setMarketListData] = useState()
  const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=${limit}&tsym=USD`;

  const getMarketListData = async () => {
    setLoading(true);
    await axios.get(url, {
      headers: {
        authorization: 'Apikey d9f896f0f08de8c0c908909ff30f330ff8a16a7bffd2cd00995f177b54ca6f2c'
      }
    })
      .then((response) => {
        const data = response.data;
        setMarketListData(data)
        setLoading(false)
      })
  }

  useEffect(() => {
    getMarketListData();
  }, [limit]);

  let date = new Date()
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let fullDate = `${day}.${month}.${year}.`;

  if (loading) return "...Loading"

  return (
    <div className='position-relative'>
      <div className="container my-4" >
        <h3>Top 10 Grossing Coins of All Time</h3>

        <table
          cellSpacing={0}
          cellPadding={0}
          className={styles.table}
          style={{
            position: "relative",
            width: "100%",
            borderCollapse: "separate",
            borderBottom: "1px solid #c5cedb",
            color: "#1212121",
            backgroundColor: "#fff"
          }}
        >
          <thead
            style={{
              verticalAlign: "middle",
              borderColor: "inherit"
            }}
          >
            <tr>
              <th
                style={{
                  padding: '5px',
                  color: '#333',
                  lineHeight: 1.42857143,
                  verticalAlign: "top",
                  fontWeight: 700,
                  borderBottom: '1px solid #00d665',

                }}
              >
                #
              </th>
              <th
                style={{
                  padding: '5px',
                  color: '#333',
                  lineHeight: 1.42857143,
                  verticalAlign: "top",
                  fontWeight: 700,
                  borderBottom: '1px solid #00d665',

                }}
              >
                Coins
              </th>
              <th
                style={{
                  padding: '5px',
                  color: '#333',
                  lineHeight: 1.42857143,
                  verticalAlign: "top",
                  fontWeight: 700,
                  borderBottom: '1px solid #00d665',

                }}
              >

                Price


              </th>
              <th
                style={{
                  padding: '5px',
                  color: '#333',
                  lineHeight: 1.42857143,
                  verticalAlign: "top",
                  fontWeight: 700,
                  borderBottom: '1px solid #00d665',

                }}

              >Total Vol 24hr</th>
              <th
                style={{
                  padding: '5px',
                  color: '#333',
                  lineHeight: 1.42857143,
                  verticalAlign: "top",
                  fontWeight: 700,
                  borderBottom: '1px solid #00d665',

                }}

              >Change PCT 24hr</th>

            </tr>
          </thead>
          <tbody
            style={{
              verticalAlign: "middle",
            }}>
            {marketListData?.Data?.map((item, index) => {
              return (
                <tr key={index}>
                  <td style={{
                    border: "1px solid #c5cedb",
                    textAlign: "center",
                    padding: "8px",

                  }}
                  > {index + 1}</td>
                  <td style={{
                    border: "1px solid #c5cedb",
                    textAlign: "center",
                    padding: "8px",

                  }} ><strong> {item?.CoinInfo.FullName}</strong></td>
                  <td style={{
                    border: "1px solid #c5cedb",
                    textAlign: "center",
                    padding: "8px",
                    textAlign: "center",

                  }} >

                    <div style={{
                      width: "60%",
                      backgroundColor: `${(parseFloat(item?.DISPLAY?.USD?.CHANGEPCTHOUR) - parseFloat(item?.DISPLAY?.USD?.CHANGEPCTHOUR))
                        > parseFloat(item?.DISPLAY?.USD?.CHANGEPCTHOUR) ? "#3d9400" : "#a11b0a" || (parseFloat(item?.DISPLAY?.USD?.CHANGEPCTHOUR) - parseFloat(item?.DISPLAY?.USD?.CHANGEPCTHOUR))
                        == parseFloat(item?.DISPLAY?.USD?.CHANGEPCTHOUR) && "#f5f5f5"
                        }`,
                      borderRadius: "4px",
                      border: "1px solid #eee",
                      whiteSpace: "nowrap",
                      textAlign: "center",
                      paddingRight: "10px",
                      paddingLeft: "10px",
                      margin: "auto",
                      color: `${(parseFloat(item?.DISPLAY?.USD?.CHANGEPCTHOUR) - parseFloat(item?.DISPLAY?.USD?.CHANGEPCTHOUR))
                        > parseFloat(item?.DISPLAY?.USD?.CHANGEPCTHOUR) ? "#fff" : "#fff" || (parseFloat(item?.DISPLAY?.USD?.CHANGEPCTHOUR) - parseFloat(item?.DISPLAY?.USD?.CHANGEPCTHOUR))
                        == parseFloat(item?.DISPLAY?.USD?.CHANGEPCTHOUR) && "#000"
                        }`,

                    }}>
                      {item?.DISPLAY?.USD?.PRICE}
                    </div>
                  </td>
                  <td style={{
                    border: "1px solid #c5cedb",
                    textAlign: "center",
                    padding: "8px",

                  }} >{item?.RAW?.USD?.TOTALVOLUME24H}</td>
                  <td style={{
                    border: "1px solid #c5cedb",
                    textAlign: "center",
                    padding: "8px",

                  }} >{item?.DISPLAY?.USD?.CHANGEPCT24HOUR}</td>
                </tr>

              )
            })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="7" className="py-2">
                Sources: <a href="https://min-api.cryptocompare.com/" rel="external"> Crypto API</a> &amp;
                <a href="https://www.cryptocompare.com/" rel="external">Cryptocompare</a>.
                Data is current as of <strong>{fullDate}</strong>
              </td>
            </tr>
          </tfoot>
        </table>
        {viewAll && <button
          href='#'
          style={{
            backgroundColor: '#fabf2c',
            boxSizing: 'border-box',
            color: '#1a1b1d',
            textAlign: 'center',
            textDecoration: 'none',
            transition: '.25s ease-out',
            padding: '4px',
            minWidth: '110px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '0 5px 5px 0',
            margin: "8px",
            alignItems: 'center'
          }}
          onClick={() => {setLimit(100)
          setViewAll(false)}}
        >
          View All
        </button>}
        
      </div>

    </div>
  )
}

export default MarketLivePage
