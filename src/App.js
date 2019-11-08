import React from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './components/example';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Electron + React + Express
        </p>
        <Example />
      </header>
    </div>
  );
}

export default App;
