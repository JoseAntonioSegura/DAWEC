import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ImageGrid from './ImageGrid';
import ModalImage from './ModalImage';

class GalleryContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imagenes: [],
      imagenSeleccionada: null,
      tituloImagenSeleccionada: null,
      paginaActual: 1,
      terminosBusqueda: '',
      totalPaginas: 1,
      busquedaRealizada: false // Nuevo estado para indicar si se ha realizado una búsqueda
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
    const { imagenes, terminosBusqueda } = this.state;
    const apiKey = 'Po9duUfJvUiqbu_g1uFsbM4DgPooDRZC7JEArAz4pk0';
    const perPage = 5; // Redefinimos el número de imágenes por página
  
    // Calculamos el número de página para cargar basado en el número de imágenes actuales y el tamaño de la página
    const nextPage = Math.ceil((imagenes.length + 1) / perPage) + 1;
  
    let url = `https://api.unsplash.com/search/photos?client_id=${apiKey}&page=${nextPage}&per_page=${perPage}&query=${terminosBusqueda}`;
  
    fetch(url)
      .then(response => response.json())
      .then(data => {
        if (data.results && Array.isArray(data.results)) {
          this.setState(prevState => ({
            imagenes: [...prevState.imagenes, ...data.results],
            totalPaginas: Math.ceil(data.total / perPage),
          }));
        } else {
          throw new Error('La respuesta no contiene resultados de imágenes');
        }
      })
      .catch(error => console.error('Error al cargar imágenes:', error.message));
  };
  
  

  cargarSiguientesImagenes = () => {
    this.setState(
      (prevState) => ({ paginaActual: prevState.paginaActual + 1 }),
      () => this.cargarImagenes(true)  // Agregamos un parámetro para indicar que es una carga adicional
    );
  };
  

  handleBuscar = () => {
    this.setState({ imagenes: [], paginaActual: 1, totalPaginas: 1, busquedaRealizada: true }, this.cargarImagenes);
  };

  abrirModal = (imagen) => {
    this.setState({ imagenSeleccionada: imagen });
  };

  cerrarModal = () => {
    this.setState({ imagenSeleccionada: null });
  };

  cargarSiguienteImagen = () => {
    const { imagenes, imagenSeleccionada } = this.state;
    const currentIndex = imagenes.findIndex(
      (imagen) => imagen.id === imagenSeleccionada.id
    );

    if (currentIndex < imagenes.length - 1) {
      this.setState({ imagenSeleccionada: null }, () => {
        this.abrirModal(imagenes[currentIndex + 1]);
      });
    }
  };

  cargarAnteriorImagen = () => {
    const { imagenes, imagenSeleccionada } = this.state;
    const currentIndex = imagenes.findIndex(
      (imagen) => imagen.id === imagenSeleccionada.id
    );

    if (currentIndex > 0) {
      this.setState({ imagenSeleccionada: null }, () => {
        this.abrirModal(imagenes[currentIndex - 1]);
      });
    }
  };

  cargarSiguientesImagenes = () => {
    this.setState(
      (prevState) => ({ paginaActual: prevState.paginaActual + 1 }),
      this.cargarImagenes
    );
  };

  cargarImagenesAnteriores = () => {
    this.setState(prevState => {
      const paginaAnterior = Math.max(prevState.paginaActual - 1, 1); // Calculamos la página anterior
      return { paginaActual: paginaAnterior, imagenes: [] }; // Reiniciamos las imágenes para cargar las anteriores
    }, this.cargarImagenes); // Llamamos a cargarImagenes después de actualizar el estado
  };
  

  render() {
    const { imagenes, imagenSeleccionada, terminosBusqueda, tituloImagenSeleccionada } = this.state;

    return (
      <div>
        <SearchBar
          value={terminosBusqueda}
          onChange={(value) => this.setState({ terminosBusqueda: value })}
          onSearch={this.handleBuscar}
        />

<ImageGrid
  images={imagenes}
  onImageClick={this.abrirModal}
  onLoadMore={this.cargarSiguientesImagenes}
  onLoadPrevious={this.cargarImagenesAnteriores}
  busquedaRealizada={this.state.busquedaRealizada} // Pasamos el estado como una propiedad
/>


        {imagenSeleccionada && (
          <ModalImage
            image={imagenSeleccionada}
            title={tituloImagenSeleccionada}
            onClose={this.cerrarModal}
            onPrev={this.cargarAnteriorImagen}
            onNext={this.cargarSiguienteImagen}
          />
        )}
      </div>
    );
  }
}

export default GalleryContainer;