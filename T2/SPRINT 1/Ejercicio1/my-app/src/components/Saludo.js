import React from 'react';

function Saludo(props) {
  return (
    <div className="saludo-container">
      <p className="saludo-text">Hola, {props.nombre}</p>
    </div>
  );
}

export default Saludo;
