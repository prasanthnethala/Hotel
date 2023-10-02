import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './NavStyle.css';
import { FaBars, FaTimes } from "react-icons/fa";


const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleCLick = ()=>setClick(!click)
    const [color, setColor] = useState(false)
    const changeColor = ()=>{
        if(window.scrollY>=100){
            setColor(!color)
        }
    }

    window.addEventListener('scroll', changeColor);

  return (
    <div className={color? 'header header-bg':'header'}>

<Link to={'/home'}>
    <h1>Portfolio</h1>
</Link>
<ul className={click?"nav-menu active":"nav-menu"}>
    <li>
        <Link to={'/home'}>Home</Link>
    </li>
    <li>
        <Link to={'/about'}>About</Link>
    </li>
    <li>
        <Link to={'/project'}>Project</Link>
    </li>
    <li>
        <Link to={'/contact'}>Contact Me</Link>
    </li>
</ul>
<div className="hamburger" onClick={handleCLick}>
    {
        click?(<FaTimes size={20} style={{color:'#fff'}}/>):(<FaBars size={20} style={{color:'#fff'}} />)
    }
</div>
    </div>
  )
}

export default Navbar
