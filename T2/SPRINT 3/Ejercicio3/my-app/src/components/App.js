// src/App.js
import React from 'react';
import './App.css';
import BuscadorPeliculas from './BuscadorPeliculas';

function App() {
  const apiKey = '776fa8d2';

  return (
    <div className="App">
      <h1>Buscador de Películas</h1>
      <BuscadorPeliculas apiKey={apiKey} />
    </div>
  );
}

export default App;
