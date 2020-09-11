import React from 'react';

const ImagePopup = (props) => {
  return (
    <section className="popup popup_content_figure image-popup">
      <figure className="figure popup__container">
        <button className="close-btn figure__close-btn" type="button" aria-label="Закрыть попап"></button>
        <img className="figure__image" src="#" alt="описание" />
        <figcaption className="figure__caption">Подпись</figcaption>
      </figure>
    </section>
  );
}
export default ImagePopup