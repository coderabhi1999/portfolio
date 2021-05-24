import React from 'react';
import './App.css';
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Interests from "./components/Interests";
import About from "./components/About";
import Portfolio from './components/Portfolio';

function App() {
  return(
  <div>
    <Banner />
    <Nav/>
    <Interests />
    <About />
    <Portfolio />
    </div>
  );
}

export default App;
