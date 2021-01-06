import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../Button'
import './Navbar.css'
import Home from '../pages/Home';
import logo from './googleplay.png'
function Navbar() {
    const [click,setClick]=useState(false);
    const [button,setButton]=useState(true);
    const [navbar,setNavbar] =useState(true);
    const [play,setPlay] = useState(false)
    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=> setClick(false);
    const showButton=()=>{
        if(window.innerWidth<=960){
            setButton(false)
        }else{
            setButton(true)
        }
    };
    const showNavbar=()=>{
       if(window.scrollY>=90){
         setNavbar(true)
       }
       else{
         setNavbar(false)
       }
    }
    const showlogo = () =>{
      if(window.scrollY>=370){
        setPlay(false)
      }else{
        setPlay(true)
      }
    }
    useEffect(()=>{
        showButton()  
    },[])
    window.addEventListener('resize',showButton)
    window.addEventListener('scroll',showNavbar)
    window.addEventListener('scroll',showlogo)
    return (
        <div>
            <nav className={navbar ? 'navbar active':'navbar'}>
            <div className="navbar-container">
             <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
              fitter<span className="navbar-logo-green">Me</span> <i class="fas fa-heartbeat"></i></Link>
              <div className="menu-icon" onClick={handleClick}>
               <i className={click ? 'fas fa-times' :'fas fa-bars'}/>
              </div>
              <div className='something'>
              <a href="https://play.google.com/store/apps/details?id=com.fitfut">
              <img src={logo} alt="" className={play ? 'logo off':'logo'}/></a>
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

