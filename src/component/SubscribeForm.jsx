import React from 'react';

function SubscribeForm() {
    return (
        <div className="SubscribeForm">
            <div className='short-title'>
                <span>Editorials</span>
            </div>
            <div className="rightForm-text">
                <p className='boldForm-text'>One Weekly Email Can Change Your Crypto Life.</p>
                <p className='Form-text'>Sign-up FREE to receive our extended weekly market update and coin analysis report</p>
            </div>
            <form action="">
                <input type="text" placeholder='Your email address' />
                <input type="submit" value={"SIGN ME UP"} className='submitbutton' />
                <div className="rightForm-text">
                    <p className='Form-small-text'>We NEVER send spam.You can unsubscribe at any time.</p>
                </div>
            </form>
        </div>
    )
}

export default SubscribeForm;