import React from 'react';

function HomeCryptoNewsRightContains(props) {
  return (
    <div className="homeCryptoNewsRightContain">
        <div className="img-holder banner-img" style={{"height":"200px"}}>
          <img src={props.pictures} alt="" />
          <div className="crptoImgtext">
            <h5>{props.text}</h5>
          </div>
        </div>
    </div>
  )
}

export default HomeCryptoNewsRightContains;