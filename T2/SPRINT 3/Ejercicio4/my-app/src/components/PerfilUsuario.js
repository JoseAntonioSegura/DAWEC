import React from 'react';

const PerfilUsuario = ({ user, onLogout }) => {
  return (
    <div>
      <h2>Welcome, {user.username}!</h2>
      <p>Email: {user.email}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default PerfilUsuario;
