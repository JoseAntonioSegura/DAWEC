import React, { useState } from 'react';

const PerfilUsuario = ({ user, onUpdateProfile, onLogout }) => {
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    profileImage: user.profileImage,
    newProfileImage: null // Para almacenar la nueva imagen de perfil seleccionada por el usuario
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleImageChange = (e) => {
    setFormData({
      ...formData,
      newProfileImage: e.target.files[0] // Almacena la nueva imagen de perfil seleccionada por el usuario
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para actualizar el perfil
    onUpdateProfile(formData);
  };

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <br />
        <label>
          Correo electrónico:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <br />
        <label>
          Imagen de Perfil:
          <input type="file" accept="image/*" onChange={handleImageChange} />
        </label>
        <br />
        <button type="submit">Guardar Cambios</button>
        <button onClick={onLogout}>Logout</button>
      </form>
      <img src={formData.profileImage} alt="Imagen de perfil" />
    </div>
  );
};

export default PerfilUsuario;
