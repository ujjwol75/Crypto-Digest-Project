import "react-datepicker/dist/react-datepicker.css";
import React, { useRef, useState } from 'react'

import DatePicker from 'react-datepicker';

import StyledEditor from '../StyledEditor/index';


import axios from 'axios';





const PostNews = () => {
  const today = new Date();

  const [publishDate, setPublishDate] = useState(today);
  const [expireDate, setExpireDate] = useState(today);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState(null);
  const [email, setEmail] = useState('');
  const [content, setContent] = useState('');



  const fileInput = useRef(null);

  const [validated, setValidated] = useState(false);
  const upload = (e) => {
    console.warn(e.target.files)
    const files = e.target.files
    setImage(files)
  }


  //handle pressRelease
  const handlePressRelease = async (event) => {
    event.preventDefault();
    console.log(new Date(publishDate), "publishDate")

    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);

    let formData = new FormData();    //formdata object
    formData.append('email', email);   //append the values with key, value pair
    if (image) {

      formData.append('image', image[0])
    }
    formData.append('title', title);
    formData.append('publish_date', new Date(publishDate).toISOString().slice(0, 10));
    formData.append('expiry_date', new Date(expireDate).toISOString().slice(0, 10));
    formData.append('content', (content));

    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        'authorization': 'Apikey d9f896f0f08de8c0c908909ff30f330ff8a16a7bffd2cd00995f177b54ca6f2c'
      }
    }
    axios.post(`https://insidecrypto.news/api/posts/public-post/`, formData, config)
      .then(response => {
        if (response.status === 200) {
          alert("Succesfully Created")
          setTitle('');
          setEmail('');
          setContent('');
          setImage('');
          setPublishDate(today);
          setExpireDate(today);
        }
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <div className="container">
      <div style={{ width: "80%", margin: "auto" }}>
        <h2>Post Crypto News</h2>
        <form noValidate
          validated={validated}
          onSubmit={handlePressRelease}
          style={{ width: "100%", display: "flex", flexDirection: "column" }}
        >

          <input
            type='email'
            placeholder='name@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='articleInput'
            required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
          />

          <input
            type='text'
            placeholder='Enter title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className='articleInput'
            required
          />

          <input
            ref={fileInput}
            type='file'
            filename={image}
            onChange={(e) => upload(e)}
            className='articleInput'

          />

          <DatePicker
            selected={publishDate}
            onChange={(e) => {
              setPublishDate(e);
            }}
            className='articleInput'

            minDate={publishDate}
            customInput={
              <input type='text' id='validationCustom01' />
            }
          />

          <DatePicker
            selected={expireDate}
            onChange={(e) => {
              setExpireDate(e);
            }}
            className='articleInput'

            minDate={expireDate}
            customInput={
              <input type='text' id='validationCustom01' />
            }
          />


          <StyledEditor
            content={content}
            setContent={setContent}
          />

          <button type="submit" style={{ width: "120px", margin: "10px", padding: "10px" }}>Submit form</button>
        </form>
      </div>
    </div>
  )
}

export default PostNews