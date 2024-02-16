import React, { useState, useEffect } from 'react';
import Login from './InicioSesion.js';
import Registro from './Registro.js';
import PerfilUsuario from './PerfilUsuario.js';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

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
      setIsProfileOpen(!!user);
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

  const onUpdateProfile = async (formData) => {
    const { name, email, password, newProfileImage } = formData;

    try {
      await firebase.auth().currentUser.updateProfile({
        displayName: name,
        photoURL: newProfileImage || user.photoURL,
      });

      if (email !== user.email) {
        await firebase.auth().currentUser.updateEmail(email);
      }

      if (password) {
        await firebase.auth().currentUser.updatePassword(password);
      }

      console.log("Perfil actualizado con éxito");
    } catch (error) {
      console.error('Error al actualizar el perfil:', error);
    }
  };

  return (
    <div className="App">
      <h1>User Authentication Demo</h1>
      {isProfileOpen && user ? (
        <div>
          <PerfilUsuario user={user} onUpdateProfile={onUpdateProfile} />
          <button onClick={handleLogout}>Cerrar Sesión</button>
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
