import React from 'react';

const ImagePopup = ({ card, onClose, onEscPress, onOverlayClick }) => {

  const className = `popup popup_content_figure image-popup ${card && 'popup_opened'}`;
  // Создаем реф для реализации плавного затухания картинки при закрытии попапа.
  const src = React.useRef('');
  
  React.useEffect(() => {
    card && document.addEventListener('keydown', onEscPress);
    // записываем в реф url картинки, когда появляется card
    src.current = card && card.link;
    return (() => {
      card && document.removeEventListener('keydown', onEscPress);
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
          // Url картинки берется либо из card.link, либо из рефа (когда картинка закрыавется и card не существует)
          src={(card && card.link) || src.current}
          alt={card && card.name} />
        <figcaption className="figure__caption">{card && card.name} </figcaption>
      </figure>
    </section>
  );
}
export default ImagePopup