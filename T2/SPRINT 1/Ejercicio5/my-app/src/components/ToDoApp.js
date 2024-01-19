import React, { useState, useEffect } from 'react';

function ToDoApp() {
  const [tareas, setTareas] = useState([]);
  const [tareasEliminadas, setTareasEliminadas] = useState([]);
  const [nuevaTarea, setNuevaTarea] = useState('');
  const [nuevaCategoria, setNuevaCategoria] = useState('');
  const [filtroCategoria, setFiltroCategoria] = useState('');
  const [filtroCompletado, setFiltroCompletado] = useState('');
  const [mostrarEliminadas, setMostrarEliminadas] = useState(false);
  const [loading, setLoading] = useState(true);
  const [tareaEditando, setTareaEditando] = useState(null);

  useEffect(() => {
    const tareasGuardadas = JSON.parse(localStorage.getItem('tareas')) || [];
    const tareasEliminadasGuardadas = JSON.parse(localStorage.getItem('tareasEliminadas')) || [];

    setTareas(tareasGuardadas);
    setTareasEliminadas(tareasEliminadasGuardadas);
    setLoading(false);
  }, []);

  useEffect(() => {
    const handleUnload = () => {
      localStorage.setItem('tareas', JSON.stringify(tareas));
      localStorage.setItem('tareasEliminadas', JSON.stringify(tareasEliminadas));
    };

    window.addEventListener('beforeunload', handleUnload);

    return () => {
      window.removeEventListener('beforeunload', handleUnload);
    };
  }, [tareas, tareasEliminadas]);

  const agregarTarea = () => {
    if (nuevaTarea.trim() !== '') {
      setTareas([...tareas, { texto: nuevaTarea, categoria: nuevaCategoria, completa: false }]);
      setNuevaTarea('');
      setNuevaCategoria('');
    }
  };

  const toggleCompletarTarea = (index, eliminada = false) => {
    const listaTareas = eliminada ? tareasEliminadas : tareas;
    const nuevasTareas = [...listaTareas];
    nuevasTareas[index].completa = !nuevasTareas[index].completa;

    if (eliminada) {
      setTareasEliminadas(nuevasTareas);
    } else {
      setTareas(nuevasTareas);
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    const tareaEliminada = nuevasTareas.splice(index, 1)[0];
    setTareas(nuevasTareas);
    setTareasEliminadas([...tareasEliminadas, tareaEliminada]);
  };

  const editarTarea = (index) => {
    setTareaEditando(index);
  };

  const guardarEdicion = (index, texto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = texto;
    setTareas(nuevasTareas);
    setTareaEditando(null);
  };

  const cancelarEdicion = () => {
    setTareaEditando(null);
  };

  const filtrarTareas = (tarea) => {

    return (
      (filtroCategoria === '' || tarea.categoria === filtroCategoria) &&
      (filtroCompletado === '' || (filtroCompletado === 'completado' ? tarea.completa : !tarea.completa))
    );
  };

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input
        type="text"
        placeholder="Nueva Tarea"
        value={nuevaTarea}
        onChange={(e) => setNuevaTarea(e.target.value)}
      />
      <input
        type="text"
        placeholder="Categoría"
        value={nuevaCategoria}
        onChange={(e) => setNuevaCategoria(e.target.value)}
      />
      <button onClick={agregarTarea}>Agregar</button>

      <div>
        <label>Filtrar por Categoría: </label>
        <select onChange={(e) => setFiltroCategoria(e.target.value)}>
          <option value="">Todos</option>
          {Array.from(new Set([...tareas, ...tareasEliminadas].map(tarea => tarea.categoria))).map((categoria, index) => (
            <option key={index} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Filtrar por Completado: </label>
        <select onChange={(e) => setFiltroCompletado(e.target.value)}>
          <option value="">Todos</option>
          <option value="completado">Completado</option>
          <option value="incompleto">Incompleto</option>
        </select>
      </div>
      <div>
        <label>
          Mostrar Eliminadas:
          <input
            type="checkbox"
            checked={mostrarEliminadas}
            onChange={() => setMostrarEliminadas(!mostrarEliminadas)}
          />
        </label>
      </div>

      <ul>
        {mostrarEliminadas &&
          tareasEliminadas.map((tarea, index) => (
            <li key={index}>
              <span>{tarea.texto} - {tarea.categoria} (Eliminada)</span>
            </li>
          ))}
        {tareas.filter(filtrarTareas).map((tarea, index) => (
          <li key={index}>
            {tareaEditando === index ? (
              <>
                <input
                  type="text"
                  value={tarea.texto}
                  onChange={(e) => setTareas((prevTareas) => {
                    const nuevasTareas = [...prevTareas];
                    nuevasTareas[index].texto = e.target.value;
                    return nuevasTareas;
                  })}
                  onBlur={() => guardarEdicion(index, tarea.texto)}
                />
                <button onClick={cancelarEdicion}>Cancelar</button>
              </>
            ) : (
              <>
                <input
                  type="checkbox"
                  checked={tarea.completa}
                  onChange={() => toggleCompletarTarea(index)}
                />
                {tarea.completa ? <del>{tarea.texto}</del> : tarea.texto} - {tarea.categoria}
                <button onClick={() => editarTarea(index)}>Editar</button>
                <button onClick={() => eliminarTarea(index)}>Eliminar</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoApp;
