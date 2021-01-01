
import React from 'react';
import Section1 from '../Section1';
import '../../App.css';
import Section2 from './Section2'
import Footer from '../../components/Footer'
import Section3 from './Section3'

 

function Home (){
    return(
        <div id='Home'>
          <Section1 />
          <Section2 />
          <Section3 />
          <Footer />
        </div>
    )
}
export default Home;