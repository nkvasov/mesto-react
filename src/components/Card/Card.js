import React from 'react';

const Card = ({card, onCardClick}) => {
  
  const handleClick = () => {
    onCardClick(card);
  }

  return (
    <li className="card">
      <button
        className="card__trash-btn card__trash-btn_enabled"
        aria-label="Удалить картинку с подписью"
        type="button"
        name="trash" />
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick} />
      <div className="card__caption">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-block">
          <button
            className="card__like-btn"
            type="button"
            name="like"
            aria-label="Поставить лайк картинке" />
          <p className="card__like-numbers">{card.likes.length || ''}</p>
        </div>
      </div>
    </li>
  );
}
export default Card;