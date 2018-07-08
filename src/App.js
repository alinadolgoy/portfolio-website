import React, { Component } from 'react';
import './App.css';
import Porfolio from './Sections/Portfolio/Portfolio.js';
import MainPicture from './Sections/MainPicture/MainPicture.js';
import AboutMe from './Sections/AboutMe/AboutMe';
import Skills from './Sections/Skills/Skills';
import Contact from './Sections/Contact/Contact'
import Footer from './Sections/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MainPicture />
      <AboutMe />
      <Porfolio />
      <Skills />
      <Contact />
      <Footer />
      </div>
    );
  }
}

export default App;
