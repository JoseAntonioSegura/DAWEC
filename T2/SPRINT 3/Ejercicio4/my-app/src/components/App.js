import React, { useState, useEffect } from 'react';
import Login from './InicioSesion.js';
import Registro from './Registro.js';
import Profile from './PerfilUsuario.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import './App.css';

const firebaseConfig = {
  apiKey: "AIzaSyCa9YadlZulNHGLc_nwJphJOGqxGhCmZow",
  authDomain: "sprint3-ejercicio4.firebaseapp.com",
  projectId: "sprint3-ejercicio4",
  storageBucket: "sprint3-ejercicio4.appspot.com",
  messagingSenderId: "169021084528",
  appId: "1:169021084528:web:eccc6a64812a94297e75b5",
  measurementId: "G-L1R92B3B3X"
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