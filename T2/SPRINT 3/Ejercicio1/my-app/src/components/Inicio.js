import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div>
      <h1>Bienvenido a la aplicación de perfiles de usuario</h1>
      <ul>
        <li><Link to="/usuario/1">Usuario 1</Link></li>
        <li><Link to="/usuario/2">Usuario 2</Link></li>
        <li><Link to="/usuario/3">Usuario 3</Link></li>
      </ul>
    </div>
  );
};

export default Inicio;
