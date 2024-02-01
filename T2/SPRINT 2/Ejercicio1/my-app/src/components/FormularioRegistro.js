import React, { Component } from 'react';

class FormularioRegistro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: '',
      errors: {
        username: '',
        email: '',
        password: '',
      },
      submitted: false, // Nuevo estado para manejar el envío
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  validateForm = () => {
    const { username, email, password } = this.state;
    let errors = {
      username: '',
      email: '',
      password: '',
    };
    let isValid = true;

    // Validación del nombre de usuario
    if (username.trim() === '') {
      errors.username = 'El nombre de usuario es requerido';
      isValid = false;
    }

    // Validación del correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = 'El correo electrónico no es válido';
      isValid = false;
    }

    // Validación de la contraseña
    if (password.length < 6) {
      errors.password = 'La contraseña debe tener al menos 6 caracteres';
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (this.validateForm()) {
      // Aquí puedes realizar la lógica de registro o enviar los datos a un servidor
      console.log('Datos válidos, enviando formulario');

      // Mostrar alerta
      alert('Registro exitoso');

      // Limpiar campos y reiniciar estado de errores
      this.setState({
        username: '',
        email: '',
        password: '',
        errors: {
          username: '',
          email: '',
          password: '',
        },
        submitted: true,
      });
    } else {
      console.log('Datos inválidos, no se puede enviar el formulario');
    }
  };

  render() {
    const { username, email, password, errors, submitted } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
            style={{ borderColor: errors.username ? 'red' : '' }}
          />
          <span style={{ color: 'red' }}>{errors.username}</span>
        </div>
        <div>
          <label>Correo electrónico:</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
            style={{ borderColor: errors.email ? 'red' : '' }}
          />
          <span style={{ color: 'red' }}>{errors.email}</span>
        </div>
        <div>
          <label>Contraseña:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            style={{ borderColor: errors.password ? 'red' : '' }}
          />
          <span style={{ color: 'red' }}>{errors.password}</span>
        </div>
        {submitted && <p>Registro exitoso</p>}
        <button type="submit">Registrarse</button>
      </form>
    );
  }
}

export default FormularioRegistro;
