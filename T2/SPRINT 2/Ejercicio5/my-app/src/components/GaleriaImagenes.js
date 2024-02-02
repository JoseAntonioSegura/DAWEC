import React, { Component } from 'react';

class ModalImagen extends Component {
  render() {
    const { imagen, cerrarModal, cargarSiguiente, cargarAnterior } = this.props;

    return (
      <div className="modal-overlay" onClick={cerrarModal}>
        <div className="modal-content">
          <button onClick={cargarAnterior}>&lt; Anterior</button>
          <img src={imagen.urls.regular} alt={imagen.alt_description} />
          <button onClick={cargarSiguiente}>Siguiente &gt;</button>
        </div>
      </div>
    );
  }
}

class GaleriaImagenesAvanzada extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagenes: [],
      imagenSeleccionada: null,
      paginaActual: 1,
      terminosBusqueda: '',
      totalPaginas: 1,
    };
  }

  componentDidMount() {
    this.cargarImagenes();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    const { paginaActual, totalPaginas } = this.state;

    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      if (paginaActual < totalPaginas) {
        this.cargarImagenes();
      }
    }
  };

  cargarImagenes = () => {
    const { paginaActual, terminosBusqueda } = this.state;
    const apiKey = 'Po9duUfJvUiqbu_g1uFsbM4DgPooDRZC7JEArAz4pk0';
    const perPage = 10;
  
    let url = `https://api.unsplash.com/search/photos?client_id=${apiKey}&page=${paginaActual}&per_page=${perPage}&query=${terminosBusqueda}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.results && Array.isArray(data.results)) {
          this.setState(prevState => ({
            imagenes: paginaActual === 1 ? data.results : [...prevState.imagenes, ...data.results],
            paginaActual: paginaActual + 1,
            totalPaginas: Math.ceil(data.total / perPage),
          }));
        } else {
          throw new Error('La respuesta no contiene resultados de imágenes');
        }
      })
      .catch(error => console.error('Error al cargar imágenes:', error.message));
  };
  handleBuscar = () => {
    this.setState({ imagenes: [], paginaActual: 1, totalPaginas: 1 }, this.cargarImagenes);
  };

  abrirModal = (imagen) => {
    this.setState({ imagenSeleccionada: imagen });
  };

  cerrarModal = () => {
    this.setState({ imagenSeleccionada: null });
  };

  render() {
    const { imagenes, imagenSeleccionada, terminosBusqueda } = this.state;

    return (
      <div>
        <div>
          <input
            type="text"
            placeholder="Buscar imágenes"
            value={terminosBusqueda}
            onChange={(e) => this.setState({ terminosBusqueda: e.target.value })}
          />
          <button onClick={this.handleBuscar}>Buscar</button>
        </div>
        <div className="galeria-grid">
          {imagenes.map((imagen) => (
            <img
              key={imagen.id}
              src={imagen.urls.small}
              alt={imagen.alt_description}
              onClick={() => this.abrirModal(imagen)}
            />
          ))}
        </div>

        {imagenSeleccionada && (
          <div className="modal-overlay" onClick={this.cerrarModal}>
            <div className="modal-content">
              <img src={imagenSeleccionada.urls.regular} alt={imagenSeleccionada.alt_description} />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default GaleriaImagenesAvanzada;
