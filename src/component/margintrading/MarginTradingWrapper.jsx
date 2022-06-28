import React from 'react'
import HomeCryptoNewsRight from '../home/HomeCryptoNewsRight'
import MarginTradingDetails from './MarginTradingDetails'

function MarginTradingWrapper() {
  return (
     <div className="MarginTraddingWrapper container">
      <div className="homeCryptoNews-left">
        <MarginTradingDetails/>
      </div>
      <div className="homeCrypttoNews-right">
      <HomeCryptoNewsRight/>
      </div>
     </div>
  )
}

export default MarginTradingWrapper