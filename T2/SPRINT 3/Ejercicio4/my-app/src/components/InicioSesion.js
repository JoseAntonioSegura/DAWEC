// Login.js
import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      if (email.trim() === '' || password.trim() === '') {
        setError('Por favor ingrese un correo electrónico y contraseña válidos.');
        return;
      }
      await firebase.auth().signInWithEmailAndPassword(email, password);
      // Inicio de sesión exitoso
    } catch (error) {
      console.error('Error de inicio de sesión:', error);
      setError('Credenciales de inicio de sesión inválidas.');
    }
  };

  return (
    <div>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
      {error && <p>{error}</p>}
      <button onClick={handleLogin}>Iniciar sesión</button>
    </div>
  );
};

export default Login;
