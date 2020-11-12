import React, { Component } from 'react';
import './App.css';
import Profile from './Components/prf';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 id="title" style={{color:"blueviolet"}}>Profile</h1>
        <Profile/>
      </div>
    );
  }
}

export default App;
