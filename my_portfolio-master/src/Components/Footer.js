import './FooterStyles.css';
import React from 'react';
import { FaHome,FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from "react-icons/fa";

const Footer = () => {
  return (
<div className='footer'>
        <div className="footer-container">
    <div className="left">
        <div className="location">
            <FaHome size={20} style={{color:'#fff', marginRight:'2rem'}}/>
        </div>
            <div>
            <p>Kasturi Apt. Ulkanagari</p>
            <p>Maharashtra, IN.</p>
            </div>

            <div className="phone">
            <h4>
            <FaPhone size={20} style={{color:'#fff', marginRight:'2rem'}}/>
            +91 - 832 99 14 036
            </h4>
            </div>

            <div className="email">
            <h4>
            <FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem'}}/>
            abhisheksonawane1997@gmail.com
            </h4>
            </div>

    </div>


            <div className="right">
                <h4>About Me</h4>
                <p>This is Abhishek Sonawane. I'm a web developer. I attended coding bootcamp to learn new languages while sharpening existing skills. Ready to apply my passion for coding to a talented engineering team to develop quality solutions.</p>
                <div className="social">
            <FaFacebook size={30} style={{color:'#fff', marginRight:'1rem'}}/>
            <FaTwitter size={30} style={{color:'#fff', marginRight:'1rem'}}/>
            <a href="https://www.linkedin.com/in/abhishek-sonawane-647148225/" target="_blank" rel="noreferrer">
            <FaLinkedin size={30} style={{color:'#fff', marginRight:'1rem'}}/>
            </a>
                </div>
            </div>
        </div>
      
</div>
  )
}

export default Footer
