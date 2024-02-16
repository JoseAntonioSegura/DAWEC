import React, { useState, useEffect } from 'react';
import LoginForm from './InicioSesion';
import RegisterForm from './Registro';
import Profile from './PerfilUsuario';

const API_BASE_URL = 'https://jsonplaceholder.typicode.com';

const App = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
    setLoading(false);
  }, []);

  const handleLogin = async (formData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setUser(data);
      setIsLoggedIn(true);
      localStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleRegister = async (formData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      const data = await response.json();
      setUser(data);
      setIsLoggedIn(true);
      localStorage.setItem('user', JSON.stringify(data));
    } catch (error) {
      console.error('Register error:', error);
    }
  };

  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="App">
      <h1>User Authentication Demo</h1>
      {isLoggedIn ? <Profile user={user} onLogout={handleLogout} /> : (
        <>
          <h2>Login</h2>
          <LoginForm onLogin={handleLogin} />
          <h2>Register</h2>
          <RegisterForm onRegister={handleRegister} />
        </>
      )}
    </div>
  );
};

export default App;
