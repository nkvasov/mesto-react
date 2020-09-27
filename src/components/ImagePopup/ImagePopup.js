import React from 'react';

const ImagePopup = ({ card, onClose, isOpen, onEscPress, onOverlayClick }) => {

  const className = `popup popup_content_figure image-popup ${card && 'popup_opened'}`;
  const src = card && card.link || '';

  React.useEffect(() => {
    card && document.addEventListener('keydown', onEscPress);
    return (() => {
      document.removeEventListener('keydown', onEscPress);
    });
  });

  return (
    <section className={className} onClick={onOverlayClick} >
      <figure className="figure popup__container">
        <button
          className="close-btn figure__close-btn"
          type="button"
          onClick={onClose}
          aria-label="Закрыть попап" />
        <img
          className="figure__image"
          // src={card && card.link}
          src={src}
          alt={card && card.name} />
        <figcaption className="figure__caption">{card && card.name} </figcaption>
      </figure>
    </section>
  );
}
export default ImagePopup