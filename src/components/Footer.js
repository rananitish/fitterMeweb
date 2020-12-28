import React from 'react';
import './Footer.css';
//import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return(
    <div className='footer-container'>
      
    <div class='footer-links'>
      <div className='footer-link-wrapper'>
        <div class='footer-link-items'>
          <h2>About Us</h2>
          <p>cbhhcadjknnkdcmak</p>
        </div>
        <div class='footer-link-items'>
          <h2>Contact Us</h2>
          <h3>Contact:</h3>
          <p>8750042239</p>
          
          
          <h3>Email:</h3>

          <p>cd@njdscj.com</p>
          <h3>Addresss:</h3>
          <p>cdscsdc</p>
        </div>
      </div>
      
        <div class='footer-link-items'>
          <h2>Social Media</h2>
          <i class='fab fa-instagram' />
          <p>Instagram</p>
          <i class='fab fa-facebook-f' />  
          <p>Facebook</p>
          <i class='fab fa-twitter' />
          <p> 
            Twitter</p>
        </div>
      
    <section class='social-media'>
      <div class='social-media-wrap'>
        <div class='footer-logo'>
          <Link to='/' className='social-logo'>
          
            FitterMe
            <i class="fas fa-heartbeat" />
            
          </Link>
        </div>
        </div>
        
        
          
        
      
    </section>
    </div>
    </div>
  
  )
}

export default Footer;
