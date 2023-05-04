import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () =>{
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_hu16uro', 'template_x5xx80p', form.current, 'dD2MNiMqqSB8RwwZn')
        .then((result) => {

            console.log(result.text);
            alert("Message sent");
        }, (error) => {
            console.log(error.text);
        });
    };
 return(

    <div id="form" >
      <form id="contact-form" ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea id="text-area" name="message" />
      <input id='send'type="submit" value="Send" />
    </form>
    </div>

 )
    
}

export default Contact;