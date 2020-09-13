import React from 'react';

const ImagePopup = (props) => {
  const className = `popup popup_content_figure image-popup ${props.card && 'popup_opened'}`
  return (
    
    <section className={className} >
      <figure className="figure popup__container">
        <button className="close-btn figure__close-btn" type="button" onClick={props.onClose} aria-label="Закрыть попап"></button>
        <img className="figure__image" src={props.card && props.card.link} alt={props.card && props.card.name} />
        <figcaption className="figure__caption">{props.card && props.card.name} </figcaption>
      </figure>
    </section>
  );
}
export default ImagePopup