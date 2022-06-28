import React from 'react';

function LatestCryptoNewsContains(props) {
    return (
        <div className="newsContains-wrapper">
            <div className="newsContains-left">
                <div className="img-holder banner-img">
                    <img src={props.pictures} alt="" />
                </div>
            </div>
            <div className="newsContains-right">
                <h3>{props.newsTitle}</h3>
                <span>{props.date}</span>
                <p className='small-text'>{props.newsText}</p>
            </div>
        </div>
    )
}

export default LatestCryptoNewsContains;