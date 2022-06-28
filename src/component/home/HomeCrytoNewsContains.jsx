import React from 'react';

function HomeCrytoNewsContains( props) {
  return (
     <div className="newsContains-wrapper">
      <div className="newsContains-left">
        <div className="img-holder banner-img">
          <img src={props.pictures} alt="" />
        </div>
      </div>
      <div className="newsContains-right">
        <span>{props.date}</span>
        <h3>{props.newsTitle}</h3>
        <p className='small-text'>{props.newsText}</p>
      </div>
     </div>
  )
}

export default HomeCrytoNewsContains;