import React, { useState, useEffect } from 'react';
import Login from './InicioSesion.js';
import Registro from './Registro.js';
import Profile from './PerfilUsuario.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './App.css';

const firebaseConfig = {
  apiKey: "AIzaSyBVLVms7BICyc_h0OuimRIatjOfjrImBkQ",
  authDomain: "sprint3-f102c.firebaseapp.com",
  projectId: "sprint3-f102c",
  storageBucket: "sprint3-f102c.appspot.com",
  messagingSenderId: "842356372247",
  appId: "1:842356372247:web:dd1ea60ffbbd8057bebd52",
  measurementId: "G-YEB32NGB9Z"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const App = () => {
  const [user, setUser] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      setUser(user);
      setIsProfileOpen(!!user); // Actualiza el estado de apertura del perfil cuando cambia el usuario
    });
    return unsubscribe;
  }, []);

  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
    } catch (error) {
      console.error('Error al cerrar sesión:', error);
    }
  };

  const onUpdateProfile = (formData) => {
    console.log(formData);
  };

  return (
    <div className="App">
      <h1>User Authentication Demo</h1>
      {user ? (
        <div>
          {isProfileOpen && <Profile user={user} onLogout={handleLogout} onUpdateProfile={onUpdateProfile} />}
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <Login />
          <h2>Registro</h2>
          <Registro />
        </div>
      )}
    </div>
  );
};

export default App;