// Registro.js
import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const Registro = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      if (email.trim() === '' || password.trim() === '') {
        setError('Por favor ingrese un correo electrónico y contraseña válidos.');
        return;
      }
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      // Registro exitoso
    } catch (error) {
      console.error('Error de registro:', error);
      setError('Hubo un error al registrar la cuenta.');
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      {error && <p>{error}</p>}
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
};

export default Registro;
