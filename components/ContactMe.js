import React, { useState } from 'react';
import { send } from 'emailjs-com';

const ContactMe = () => {
  const [showSent, setShowSent] = useState(false)
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  });
  
  const onSubmit = (e) => {
    e.preventDefault();
    send(
      'service_6pp6vos',
      'template_638wrgd',
      toSend,
      'EKQBp2Lom6XwoAEhP'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setShowSent(true)
        setToSend({
          from_name: '',
          message: '',
          reply_to: '',})
        
        
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });
    setToSend({from_name: '', message: '', reply_to: ''})
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  
  return (
    <div className='h-screen' id='contactMe'>
      <h1 className='text-ORANGE'>Contact <span className='text-BLUE'>Me</span></h1>
      <div>
        <aside className='col-span-1  p-2 m-2'>
          <p>If you’re interested in my work and would like to contact me, you can send me an email at: <span className='font-bold'>contact.evedrake@gmail.com</span></p>
          <p>Or feel free to use the attached form and I will get back to you shortly.</p>

          <div className={showSent? 'w-full inset-0 p-6' : 'hidden'}>
            <div class="bg-DARK text-white font-bold rounded-t px-4 py-2">
              <h4 className='text-BLUE'>Message <span className='text-ORANGE'>Sent</span></h4>
            </div>
            <div class="border border-t-0 border-DARK rounded-b bg-LIGHT px-4 py-3 text-DARK">
              <p>Thank you. I aim to get back to you within a week. </p>
            </div>
          </div>
        </aside>
        
      </div>

      <div className='col-span-2 p-4'>
        <form onSubmit={onSubmit} >
          <label className="block mt-2 text-sm font-medium text-DARK dark:text-GREY">Your Name</label>
          <input 
            type="text" 
            name="from_name"
            className="bg-LIGHT-50 border border--300 text-DARK text-sm rounded-lg focus:ring-ORANGE focus:border-ORANGE block w-full p-2.5 dark:bg-gray dark:border-GREY-600 dark:text-LIGHT dark:focus:ring-ORANGE dark:focus:border-ORANGE"
            value={toSend.from_name} 
            onChange={handleChange}/>

          <label className="block mt-2 text-sm font-medium text-DARK dark:text-GREY">Your Email</label>
          <input 
            type="email" 
            name="reply_to"
            className="bg-LIGHT-50 border border--300 text-DARK text-sm rounded-lg focus:ring-ORANGE focus:border-ORANGE block w-full p-2.5 dark:bg-gray-700 dark:border-GREY-600 dark:text-LIGHT dark:focus:ring-ORANGE dark:focus:border-ORANGE"
            value={toSend.reply_to} 
            onChange={handleChange}/>
          
          <label className="block mt-2 text-sm font-medium text-DARK dark:text-GREY">Your Message</label>
          <textarea 
            name="message"
            value={toSend.message} 
            className="bg-LIGHT-50 border border--300 text-DARK text-sm rounded-lg focus:ring-ORANGE focus:border-ORANGE block w-full p-2.5 dark:bg-gray-700 dark:border-GREY-600 dark:text-LIGHT dark:focus:ring-ORANGE dark:focus:border-ORANGE"
            onChange={handleChange}/>
          <button type='submit' className='my-2 text-white bg-ORANGE hover:bg-BLUE focus:ring-4 focus:outline-none focus:ring-BLUE font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-BLUE dark:hover:bg-BLUE-700 dark:focus:ring-blue-800"'>Sent</button>
        </form>
      </div>

    </div>
  )
}

export default ContactMe
