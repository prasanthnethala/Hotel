import React from 'react';
import './AboutContentStyles.css';
import { Link } from 'react-router-dom';
import frontEnd1 from '../Imgs/frontEnd1.jpg';
import react1 from '../Imgs/react1.jpg';


const AboutContent = () => {
  return (
    <div className='about'>


        <div className="left">
<h1>HEY, I'M ABHISHEK SONAWANE</h1>
<p>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</p>
<Link to='/contact' >
    <button className='btn'>Contact</button>
</Link>
        </div>


      <div className="right">
<div className="img-container">
    <div className="img-stack top">
        <img src={frontEnd1} alt="true" 
/>
    </div>
    <div className="img-stack bottom">
        <img src={react1} alt="true" 
className='img'/>
    </div>
</div>
      </div>

    </div>
  )
}

export default AboutContent
