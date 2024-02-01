import React from 'react';

class AppTareas extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tareas: JSON.parse(localStorage.getItem('tareas')) || [],
      nuevaTarea: '',
      filtro: 'todas'
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tareas !== this.state.tareas) {
      localStorage.setItem('tareas', JSON.stringify(this.state.tareas));
    }
  }

  agregarTarea = () => {
    if (this.state.nuevaTarea.trim() === '') {
      // Evitar agregar tarea con campo de texto vacío
      return;
    }

    const tareas = [...this.state.tareas, { texto: this.state.nuevaTarea, completada: false }];
    this.setState({ tareas, nuevaTarea: '' });
  }

  eliminarTarea = (indice) => {
    const tareas = [...this.state.tareas];
    tareas.splice(indice, 1);
    this.setState({ tareas });
  }

  marcarCompletada = (indice) => {
    const tareas = [...this.state.tareas];
    tareas[indice].completada = !tareas[indice].completada;
    this.setState({ tareas });
  }

  cambiarFiltro = (filtro) => {
    this.setState({ filtro });
  }

  render() {
    let tareas = [];
    switch (this.state.filtro) {
      case 'todas':
        tareas = this.state.tareas;
        break;
      case 'completadas':
        tareas = this.state.tareas.filter(tarea => tarea.completada);
        break;
      case 'pendientes':
        tareas = this.state.tareas.filter(tarea => !tarea.completada);
        break;
      default:
        break;
    }

    return (
      <div className="app-container">
        <h1>Lista de Tareas</h1>
        <div className="form-container">
          <input type='text' value={this.state.nuevaTarea} onChange={(e) => this.setState({ nuevaTarea: e.target.value })} />
          <button onClick={this.agregarTarea}>Agregar tarea</button>
          <select value={this.state.filtro} onChange={(e) => this.cambiarFiltro(e.target.value)}>
            <option value="todas">Todas</option>
            <option value="completadas">Completadas</option>
            <option value="pendientes">Pendientes</option>
          </select>
        </div>
        <ul className="tareas-list">
          {tareas.map((tarea, indice) => (
            <li key={indice}>
              <span style={{ textDecoration: tarea.completada ? 'line-through' : 'none' }}>{tarea.texto}</span>
              <button onClick={() => this.marcarCompletada(indice)}>Marcar como {tarea.completada ? 'pendiente' : 'completada'}</button>
              <button onClick={() => this.eliminarTarea(indice)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default AppTareas;