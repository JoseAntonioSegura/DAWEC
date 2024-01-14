import React from 'react';
import {useState} from 'react';

function Contador() {
    const [cuenta, setCuenta] = useState(0);
  
    const incrementar = () => {
      setCuenta(cuenta + 1);
    };
  
    return (
      <div>
        <p>{cuenta}</p>
        <button onClick={incrementar}>Incrementar</button>
      </div>
    );
  }
  
  export default Contador;
