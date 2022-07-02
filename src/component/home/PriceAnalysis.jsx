import React from 'react';

function PriceAnalysis(props) {
    return (
        <>
            <h5>{props.pricehead}</h5>
            <div className="img-holder banner-img">
                <img src={props.pictures} alt="" />
                <div className="analysisdate">
                    <span>{props.date}</span>
                </div>
            </div>
            <div className="priceAnalysis-caption">
                <h4 className='small-text'>{props.caption}</h4>
            </div>
        </>
    )
}

export default PriceAnalysis;