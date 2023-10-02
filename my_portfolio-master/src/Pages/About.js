import React from 'react'
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import HeroImg2 from '../Components/HeroImg2';
import AboutContent from '../Components/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg2 heading='ABOUT' text='Im a friendly web-developer.'/>
      <AboutContent/>
      <Footer/>
    </div>
  )
}

export default About
