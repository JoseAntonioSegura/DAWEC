import React from 'react';

const ModalImage = ({ image, onClose, onPrev, onNext }) => (
  <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content">
      <img src={image.urls.regular} alt={image.alt_description} />
      <div className="image-caption">{image.alt_description}</div> {/* Agregamos el texto con el nombre de la imagen */}
    </div>
    <div className="modal-nav-container">
      <button className="modal-nav-btn" onClick={onPrev}>
        Anterior
      </button>
      <button className="modal-nav-btn" onClick={onNext}>
        Siguiente
      </button>
    </div>
  </div>
);

export default ModalImage;
