import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('')
  const [contactEmail, setContactEmail] = useState('')
  const [email, setEmail] = useState('')
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setEmail(`Message from ${name} that can be contacted at ${contactEmail}. It states ${message}`)
    emailjs.send('service_6pp6vos', 'template_638wrgd', {email}, 'EKQBp2Lom6XwoAEhP');
    setName('')
    setEmail('')
    setContactEmail('')
  }
  return (
    <div>
      <h1 className='text-ORANGE'>Contact <span className='text-BLUE'>Me</span></h1>
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input 
        type="text" 
        name="name"
        value={name} 
        onChange={(e)=>setName(e.target.value)}/>

      <label>Your Email</label>
      <input 
        type="text" 
        name="emailname"
        value={contactEmail} 
        onChange={(e)=>setContactEmail(e.target.value)}/>
      
      <label>Message</label>
      <textarea 
        name="message"
        value={message} 
        onChange={(e)=>setMessage(e.target.value)}/>
      <button type='submit'>Sent</button>
    </form>
    </div>
  )
}

export default ContactMe