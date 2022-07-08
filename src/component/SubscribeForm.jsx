import React, {useState} from 'react';
import usePostHook from '../customHooks/usePostHooks'; 
import {APIs} from '../../pages/api/hello';

function SubscribeForm() {
    const {
        mutate: createMutate,
        isPostError: errorMessage,
        isPostSuccess: successMessage,
        postData: postData,
      } = usePostHook({
        queryKey: 'suscribeToNewsLetter',
      });
    
      const handleNewsLetterClick = (email) => {
       
        const url = APIs.newsLetter;
        const formData = {
          email: email,
        };
        console.log('data: ' , formData)
        try {
          createMutate({ url, formData });
          
        } catch (e) {
          console.log(e);
        }
        if(successMessage){
          console.log('success: ' , successMessage)
        }
      };

    const [formValue, setFormValue] = useState("");
    
    const handleClick = (e) => {
        e.preventDefault();
        handleNewsLetterClick(formValue);
        setFormValue("");
    };

    return (
        <div className="SubscribeForm">
            <div className='short-title'>
                <span>Editorials</span>
            </div>
            <div className="rightForm-text">
                <p className='boldForm-text'>One Weekly Email Can Change Your Crypto Life.</p>
                <p className='Form-text'>Sign-up FREE to receive our extended weekly market update and coin analysis report</p>
            </div>
            <form action="" onSubmit={handleClick}>
                <input type="email" placeholder='Your email address'
                 value={formValue}
                 onChange={(e)=>setFormValue(e.target.value)}
                />
                <input type="submit" value={"SIGN ME UP"} className='submitbutton'  onClick={handleClick}/>
                <div className="rightForm-text">
                    <p className='Form-small-text'>We NEVER send spam.You can unsubscribe at any time.</p>
                </div>
            </form>
        </div>
    )
}

export default SubscribeForm;