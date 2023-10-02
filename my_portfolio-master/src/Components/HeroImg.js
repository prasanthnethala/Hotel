import React from 'react';
import './HeroImgStyle.css';
import IntroImg from '../Imgs/introImg.jpg';
import {Link} from 'react-router-dom';


const HeroImg = () => {
  return (
    <div className='hero'>
    <div className='mask'>
        <img className='into-img' src={IntroImg} alt="IntroImg" style={{width:'100%', height:"100%"}}/>
      </div>
      <div className="content">
        <p>HI, I'M FRONT-END DEVELOPER.</p>
        <h1>Web Developer.</h1>
      
      <div>
        <Link to={'/project'} className='btn btn-dark'>Projects</Link>
        <Link to={'/contact'} className='btn btn-light'>Contact</Link>
      </div>
      </div>
    </div>
  )
}

export default HeroImg;
