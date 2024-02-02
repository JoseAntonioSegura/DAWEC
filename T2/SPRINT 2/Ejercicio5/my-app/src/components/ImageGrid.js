import React from 'react';

const ImageGrid = ({ images, onImageClick, onLoadMore }) => {
  const startIndex = Math.max(0, images.length - 5);  // Índice de inicio para las últimas 5 imágenes
  const imagesToShow = images.slice(startIndex);

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
      <button className="load-more-btn" onClick={onLoadMore}>
        Cargar Más
      </button>
    </div>
  );
};

export default ImageGrid;
