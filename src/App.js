import React from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
//import Section1 from './components/Section1'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Home from "./components/pages/Home";
import Footer from '../src/components/Footer';


function App() {
  return (
   <>
    <Router>
      <Navbar/>
      
      
      <Switch>
      <Route path='/' exact component={Home} />
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
