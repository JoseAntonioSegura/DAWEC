import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Inicio from './Inicio';
import PerfilUsuario from './PerfilUsuario';
import './App.css';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/usuario/:id" element={<PerfilUsuario />} />
    </Routes>
  );
}

export default App;
