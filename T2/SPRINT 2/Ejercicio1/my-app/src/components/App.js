// App.js
import React from 'react';
import FormularioRegistro from './FormularioRegistro';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <div className="content-container">
        <h1>Formulario de Registro</h1>
        <FormularioRegistro />
      </div>
    </div>
  );
}

export default App;
