import React from 'react';

const Card = ({card, onCardClick, wasLiked, isOwner}) => {

  const [isLiked, setIsLiked] = React.useState(wasLiked);

  const handleImageClick = () => {
    onCardClick(card);
  }
  const handleLikeClick = () => {
    // console.log('Like');
    // console.log(isLiked);
    isLiked ? setIsLiked(false) : setIsLiked(true);
  }

  const likeClassName = `card__like-btn ${isLiked && 'card__like-btn_enabled'}`;

  const TrashClassName = `card__trash-btn ${isOwner && 'card__trash-btn_enabled'}`;


  return (
    <li className="card">
      <button
        className={TrashClassName}
        aria-label="Удалить картинку с подписью"
        type="button"
        name="trash" />
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleImageClick} />
      <div className="card__caption">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like-block">
          <button
            className={likeClassName}
            type="button"
            name="like"
            onClick={handleLikeClick}
            aria-label="Поставить лайк картинке" />
          <p className="card__like-numbers">{card.likes.length || ''}</p>
        </div>
      </div>
    </li>
  );
}
export default Card;