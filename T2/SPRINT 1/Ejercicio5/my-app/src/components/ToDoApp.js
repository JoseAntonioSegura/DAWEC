// src/components/ToDoApp.js
import React, { useState, useEffect } from 'react';

function ToDoApp() {
  const [tareas, setTareas] = useState([]);
  const [categorias, setCategorias] = useState(['Trabajo', 'Personal', 'Estudio']);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Todas');

  // Cargar tareas desde el Local Storage al iniciar la aplicación
  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    setTareas(tareasGuardadas);
  }, []); // Se ejecuta solo al montar el componente

  // Guardar o actualizar tareas en el Local Storage cada vez que cambian
  useEffect(() => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  }, [tareas]);

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, { texto: nuevaTarea, completa: false, categoria: categoriaSeleccionada }]);
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

  const filtrarTareas = () => {
    if (categoriaSeleccionada === 'Todas') {
      return tareas;
    } else {
      return tareas.filter((tarea) => tarea.categoria === categoriaSeleccionada);
    }
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <select
        value={categoriaSeleccionada}
        onChange={(e) => setCategoriaSeleccionada(e.target.value)}
      >
        <option value="Todas">Todas</option>
        {categorias.map((categoria) => (
          <option key={categoria} value={categoria}>
            {categoria}
          </option>
        ))}
      </select>
      <button onClick={agregarTarea}>
        Agregar
      </button>

      <ul>
        {filtrarTareas().map((tarea, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={tarea.completa}
              onChange={() => toggleCompletarTarea(index)}
              disabled={tarea.completa}
            />
            {tarea.completa ? (
              <span style={{ textDecoration: 'line-through' }}>{tarea.texto}</span>
            ) : (
              tarea.texto
            )}
            <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
