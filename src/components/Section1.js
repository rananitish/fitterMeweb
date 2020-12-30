import React from 'react'
import food from './food.jpg'
import './section1.css' ;
import {Button} from './Button'
//import '../App.css';
import './Footer.css';
//import { Link } from 'react-router-dom';


function Section1() {
    return (
        <div>
        <section className='section1-container'>
           <img src={food }/>
           
           <h1 >WELCOME !!</h1>
           <p >To Our Fitness Arena</p>
           
           <div className="section-btns">
           
             <Button className="btn" buttonStyle="btn--outline" buttonSize='btn--large'
             onClick={(e)=>{
                 e.preventDefault();
                 window.location.href='https://play.google.com/store/apps/details?id=com.fitfut';
             }}
             ><i class="fab fa-google-play"></i> Get the App</Button>

           
          
           
           </div>


        </section>
       
    </div>
    )
}

export default Section1;
