import React from 'react';
import Cronometro from './Cronometro';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="content-container">
        <h1>Cronómetro</h1>
        <Cronometro />
      </div>
    </div>
  );
}

export default App;
