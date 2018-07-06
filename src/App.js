import React, { Component } from 'react';
import './App.css';
import Porfolio from './Sections/Portfolio/Portfolio.js';
import MainPicture from './Sections/MainPicture/MainPicture.js';

class App extends Component {
  render() {
    return (
      <div className="App">
      <MainPicture />
      <Porfolio />
      </div>
      
    );
  }
}

export default App;
