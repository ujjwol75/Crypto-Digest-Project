import React,{useState} from 'react';
import { BiMap } from 'react-icons/bi';
import { AiOutlinePhone } from 'react-icons/ai'
import { FiMail } from 'react-icons/fi';
import { GoGlobe } from 'react-icons/go';
import usePostHook from '../../customHooks/usePostHooks'; 
import {APIs} from '../../../pages/api/hello';

function ContactWrapper() {
  const {
    mutate: createMutate,
    isPostError: errorMessage,
    isPostSuccess: successMessage,
    postData: postData,
  } = usePostHook({
    queryKey: 'contactUsForm',
  });

  const handlecontact = (name,email,phone,message) => {
   
    const url = APIs.contactForm;
    const formData= {
      full_name:name,
      email:email,
      phone_number:phone,
      message:message
    };
    console.log('data: ' , formData)
    try {
      createMutate({ url, formData});
      
    } catch (e) {
      console.log(e);
    }
    if(successMessage){
      console.log('success: ' , successMessage)
    }
  };

const [contactformValue, setContactFormValue] = useState({
  name:"",
  email:"",
  phone:"",
  message:""
});

const handleClick = (e) => {
    e.preventDefault();
    handlecontact(contactformValue.name,contactformValue.email,contactformValue.phone,contactformValue.message);
    setContactFormValue("");
};

console.log("handlecontact",contactformValue);
  return (
    <div className="contactWrapper container">
      <div className="contact-Left">
        <form action="" className="contact-form" onSubmit={handleClick}>
          <h2>Get in Touch</h2>
          <input type="text" placeholder='Full Name' className='user' 
          id='name'
          value={contactformValue.name}
          onChange={(e)=>setContactFormValue(e.target.value)}
          />
          <input type="email" placeholder='Email' className='user' 
          id='email'
           handlecontact={handlecontact}
           value={contactformValue.email}
           onChange={(e)=>setContactFormValue(e.target.value)}
          />
          <input type="phone" placeholder='Phone Number' className='user' 
          id='phone'
          value={contactformValue.phone}
          onChange={(e)=>setContactFormValue(e.target.value)}
          />
          <textarea type="text-area" placeholder='Message.....' className='user' 
          id='message'
          value={contactformValue.message}
          onChange={(e)=>setContactFormValue(e.target.value)}
          />
          <input type="submit" className='contact-submit' onClick={handleClick}/>
        </form>
      </div>
      <div className="contact-right">
        <div className="contact-detail">
          <h2>Get in Touch</h2>
          <ul>
            <li>
              <BiMap className="contantlist-icon"/>
              <div >
                <p>Address</p>
                <p>kamalbinayak</p>
              </div>
            </li>
            <li>
              <AiOutlinePhone className="contantlist-icon"/>
              <div>
                <p>Phone</p>
                <p>+ 446  446 446</p>
              </div>
            </li>
            <li>
              <FiMail className="contantlist-icon"/>
              <div>
                <p>Email</p>
                <p>abhilashaduwal@gmail.com</p>
              </div>
            </li>
            <li>
              <GoGlobe className="contantlist-icon"/>
              <div>
                <p>Websites</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContactWrapper;