import React from 'react';

const ImagePopup = ({card, onClose, isOpen}) => {
  
  const className = `popup popup_content_figure image-popup ${isOpen && 'popup_opened'}`;

  return (
    <section className={className} >
      <figure className="figure popup__container">
        <button
          className="close-btn figure__close-btn"
          type="button"
          onClick={onClose}
          aria-label="Закрыть попап" />
        <img
          className="figure__image"
          src={card && card.link}
          alt={card && card.name} />
        <figcaption className="figure__caption">{card && card.name} </figcaption>
      </figure>
    </section>
  );
}
export default ImagePopup