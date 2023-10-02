import React from 'react';
import Footer from '../Components/Footer';
import HeroImg2 from '../Components/HeroImg2';
import Navbar from '../Components/Navbar';
import Form from '../Components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading='CONTACT.' text='Lets have a chat'/>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
