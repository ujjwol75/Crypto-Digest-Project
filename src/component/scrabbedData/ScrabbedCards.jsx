import React from 'react'

function ScrabbedCards(props) {
  return (
    <div className="ScrabbedCards">
         <div className="img-holder banner-img">
          <img src={props.pictures} alt="" />
        </div>
        <div className="release-caption">
             <h4>{props.caption}</h4>
        </div>
    </div>
  )
}

export default ScrabbedCards;