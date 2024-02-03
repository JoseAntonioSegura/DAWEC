import React from 'react';

const ImageGrid = ({ images, onImageClick, onLoadMore, onLoadPrevious, busquedaRealizada }) => {
  const perPage = 5; // Definimos el número de imágenes por página
  const totalPages = Math.ceil(images.length / perPage); // Calculamos el número total de páginas
  const currentPageIndex = Math.max(totalPages - 1, 0); // Índice de la página actual (comenzando desde 0)
  const startIndex = currentPageIndex * perPage; // Índice de inicio para las imágenes actuales

  const imagesToShow = images.slice(startIndex, startIndex + perPage); // Seleccionamos las imágenes para mostrar

  return (
    <div className="galeria-grid">
      <div className="reel-container">
        {imagesToShow.map((image) => (
          <div key={image.id} className="reel-item">
            <img
              src={image.urls.small}
              alt={image.alt_description}
              onClick={() => onImageClick(image)}
            />
          </div>
        ))}
      </div>
      {busquedaRealizada && ( // Mostrar los botones solo si se ha realizado una búsqueda
        <div className="button-container">
          <button className="load-less-btn" onClick={onLoadPrevious}>
            Cargar Anteriores
          </button>
        </div>
      )}
      {busquedaRealizada && ( // Mostrar los botones solo si se ha realizado una búsqueda
        <div className="button-container">
          <button className="load-more-btn" onClick={onLoadMore}>
            Cargar Más
          </button>
        </div>
      )}
    </div>
  );
};


export default ImageGrid;
