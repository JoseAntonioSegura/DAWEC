import React from 'react';

const ListaDeFrutas = (props) => {
  return (
    <ul>
      {props.frutas.map((fruta, index) => (
        <li key={index}>
          <img src={fruta.imagen} alt={fruta.nombre} />
          {fruta.nombre}
        </li>
      ))}
    </ul>
  );
};

export default ListaDeFrutas;