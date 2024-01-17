import React from 'react';

const ListaDeFrutas = (props) => {
  return (
    <ul className="frutas-lista">
      {props.frutas.map((fruta, index) => (
        <li key={index} className="fruta-item">
          <div className="fruta-contenido">
            <img src={fruta.imagen} alt={fruta.nombre} className="fruta-imagen" />
            <span className="fruta-nombre">{fruta.nombre}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListaDeFrutas;
