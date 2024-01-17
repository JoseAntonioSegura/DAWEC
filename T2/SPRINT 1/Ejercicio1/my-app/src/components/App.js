import React from 'react';
import HolaMundo from './HolaMundo';
import Saludo from './Saludo';
import './App.css';

const App = () => {
  return (
    <div>
      <HolaMundo />
      <Saludo nombre="Juan" />
      <Saludo nombre="María" />
      <Saludo nombre="Pedro" />
      <Saludo nombre="Paco" />
      <Saludo nombre="Pedro" />
      <Saludo nombre="Nerea" />
    </div>
  );
};

export default App;