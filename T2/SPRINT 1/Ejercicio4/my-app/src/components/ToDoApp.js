// src/components/ToDoApp.js
import React, { useState } from 'react';

function ToDoApp() {
  const [tareas, setTareas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, { texto: nuevaTarea, completa: false }]);
      setNuevaTarea('');
    }
  };

  const toggleCompletarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completa = !nuevasTareas[index].completa;
    setTareas(nuevasTareas);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar</button>

      <ul>
        {tareas.map((tarea, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={tarea.completa}
              onChange={() => toggleCompletarTarea(index)}
            />
            {tarea.completa ? <del>{tarea.texto}</del> : tarea.texto}
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
