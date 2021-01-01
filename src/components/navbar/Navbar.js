import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../Button'
import './Navbar.css'
import Home from '../pages/Home'
function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);
    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=> setClick(false);
    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }
    };
    useEffect(()=>{
        showButton()  
    },[])
    window.addEventListener('resize',showButton)
    return (
        <div>
            <nav className="navbar">
            <div className="navbar-container">
             <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
              Fitter<span className="navbar-logo-green">Me</span> <i class="fas fa-heartbeat"></i></Link>
              <div className="menu-icon" onClick={handleClick}>
               <i className={click ? 'fas fa-times' :'fas fa-bars'}/>

              </div>
              <ul className={click ? 'nav-menu active':'nav-menu'}>
              <li className="nav-item">
               <a href="#Home" className='nav-links' onClick={closeMobileMenu}>
                 Home
               </a></li>
               <li className="nav-item">
               <a href="#Features" className='nav-links' onClick={closeMobileMenu}>
                 Features
               </a></li>
               <li className="nav-item">
               <a href="#team" className='nav-links' onClick={closeMobileMenu}>
                 Team
               </a></li>
               
              </ul>
              
            </div></nav>
        </div>
    )
}
//{button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}

export default Navbar

