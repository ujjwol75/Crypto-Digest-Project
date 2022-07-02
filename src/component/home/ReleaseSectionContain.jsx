import React from 'react';

function ReleaseSectionContain(props) {
  return (
    <>
         <div className="img-holder banner-img">
          <img src={props.pictures} alt="" />
        </div>
        <div className="release-caption">
             <h4 className='small-text'>{props.caption}</h4>
        </div>
    </>
  )
}

export default ReleaseSectionContain;