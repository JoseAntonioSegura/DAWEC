import React from 'react';
import { useForm } from 'react-hook-form';

const FormularioContacto = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    alert("Formulario enviado con éxito");
  };

  return (
    <div className="form-wrapper">
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
        <h1>Formulario de Contacto</h1>
        <div className="form-group">
          <label>Nombre:</label>
          <input {...register("nombre", { required: true })} />
          {errors.nombre && <span className="error-message">Este campo es obligatorio</span>}
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
          {errors.email && <span className="error-message">Por favor, introduce un correo electrónico válido</span>}
        </div>
        <div className="form-group">
          <label>Mensaje:</label>
          <textarea {...register("mensaje", { required: true })} />
          {errors.mensaje && <span className="error-message">Este campo es obligatorio</span>}
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default FormularioContacto;
