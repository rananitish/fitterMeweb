import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
//import Section1 from './components/Section1'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import Footer from '../src/components/Footer';
import Section2 from './components/pages/Section2'
import Section1 from './components/Section1';


function App() {
  return (
   <>
    <Router>
      <Navbar/>
      <Home/>
      
      
      
      
    </Router>
    </>
  );
}

export default App;
