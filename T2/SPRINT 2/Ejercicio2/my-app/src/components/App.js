import React from 'react';
import Cronometro from './Cronometro';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="crystal-container"> {/* Agregué la clase crystal-container aquí */}
        <div className="content-container">
          <h1>Cronómetro</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
