import React, { Component } from 'react';
import './App.css';
import NavBar from './components/NavBar';
import InputPage from './components/InputPage';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <InputPage />
      </div>
    );
  }
}

export default App;
