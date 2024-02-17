// PerfilUsuario.js
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';

const PerfilUsuario = ({ user, onUpdateProfile, onLogout }) => {
  const [formData, setFormData] = useState({
    name: user.displayName || '',
    email: user.email || '',
    profileImage: user.photoURL || '',
    newProfileImage: null,
    newPassword: '',
    newEmail: ''
  });
  const [error, setError] = useState(null);

  useEffect(() => {
    setFormData(prevFormData => ({
      ...prevFormData,
      profileImage: user.photoURL || ''
    }));
  }, [user.photoURL]);

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
        
        // Actualizar correo electrónico si hay un nuevo correo electrónico
        if (formData.newEmail !== '') {
          await currentUser.updateEmail(formData.newEmail);
        }
  
        if (formData.newProfileImage) {
          const storageRef = firebase.storage().ref();
          const fileRef = storageRef.child(`profile_images/${currentUser.uid}`);
          await fileRef.put(formData.newProfileImage);
          const imageUrl = await fileRef.getDownloadURL();
          await currentUser.updateProfile({
            displayName: formData.name,
            photoURL: imageUrl // Actualiza la URL de la imagen de perfil
          });
          // Actualiza formData.profileImage con la nueva URL de la imagen
          setFormData(prevFormData => ({
            ...prevFormData,
            profileImage: imageUrl
          }));
        } else {
          await currentUser.updateProfile({
            displayName: formData.name
          });
        }
  
        onUpdateProfile(formData);
      } else {
        setError('Usuario no autenticado.');
      }
    } catch (error) {
      console.error('Error al actualizar perfil:', error);
      setError('Hubo un error al actualizar el perfil.');
    }
  };
  

  return (
    <div>
      <h2>Perfil de Usuario</h2>
      {error && <p>{error}</p>}
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
      {formData.profileImage && <img src={formData.profileImage} alt="Imagen de perfil" />}
    </div>
  );
};

export default PerfilUsuario;
