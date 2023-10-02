import React from 'react'
import './FormStyles.css'

const Form = () => {
  return (
    <div className='form'>
      <form action="">
        <label htmlFor="">Name</label>
            <input type="text" placeholder='Enter Your Name' />
        
        <label>Email</label>
            <input type="email" placeholder='Enter Your Email'/>
        <label>Subject</label>
            <input type="text" placeholder='Enter Your Subject'/>
        <label>Message</label>
            <textarea name="message" rows="6" placeholder='Enter Your Message here'></textarea>
            <button className='btn'>Submit</button>
        
      </form>
    </div>
  )
}

export default Form
