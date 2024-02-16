import React, { useState } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage'; // Importa el módulo de Storage

const PerfilUsuario = ({ user, onUpdateProfile, onLogout }) => {
  const [formData, setFormData] = useState({
    name: user.displayName,
    email: user.email,
    profileImage: user.photoURL,
    newProfileImage: null,
    newPassword: '', // Campo para nueva contraseña
    newEmail: '' // Campo para nuevo correo electrónico
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
      newProfileImage: e.target.files[0]
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const currentUser = firebase.auth().currentUser;

      if (currentUser) {
        if (formData.newPassword !== '') {
          await currentUser.updatePassword(formData.newPassword);
        }

        if (formData.newEmail !== '') {
          await currentUser.updateEmail(formData.newEmail);
        }

        // Subir la nueva imagen de perfil al almacenamiento en la nube
        if (formData.newProfileImage) {
          // Código para subir imagen
        }

        await currentUser.updateProfile({
          displayName: formData.name
        });

        onUpdateProfile(formData);
      } else {
        console.error('Usuario no autenticado.');
      }
    } catch (error) {
      console.error('Error al actualizar perfil:', error);
    }
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
          Nueva Contraseña:
          <input type="password" name="newPassword" value={formData.newPassword} onChange={handleChange} />
        </label>
        <br />
        <label>
          Nuevo Correo Electrónico:
          <input type="email" name="newEmail" value={formData.newEmail} onChange={handleChange} />
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
