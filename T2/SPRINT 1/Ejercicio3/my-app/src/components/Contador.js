import React, { useState } from 'react';

function Contador() {
  const [cuenta, setCuenta] = useState(0);

  const incrementar = () => {
    setCuenta(cuenta + 1);
  };

  return (
    <div className="contador-container">
      <p className="contador-text">{cuenta}</p>
      <button className="contador-button" onClick={incrementar}>
        Incrementar
      </button>
    </div>
  );
}

export default Contador;
