import React, { Component } from 'react';

class GaleriaImagenes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagenes: [],
      imagenSeleccionada: null,
    };
  }

  componentDidMount() {
    const apiKey = 'Po9duUfJvUiqbu_g1uFsbM4DgPooDRZC7JEArAz4pk0';
    fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}&per_page=10`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error en la petición: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          this.setState({ imagenes: data });
        } else {
          throw new Error('La respuesta no es un array de imágenes');
        }
      })
      .catch(error => console.error('Error al cargar imágenes:', error.message));
  }
  

  abrirModal = (imagen) => {
    this.setState({ imagenSeleccionada: imagen });
  }

  cerrarModal = () => {
    this.setState({ imagenSeleccionada: null });
  }

  render() {
    const { imagenes, imagenSeleccionada } = this.state;
  
    if (!Array.isArray(imagenes)) {
      // Manejar el caso en que imagenes no sea un array (por ejemplo, mostrar un mensaje de error)
      return <div>Error al cargar las imágenes</div>;
    }
  
    return (
      <div>
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

export default GaleriaImagenes;
