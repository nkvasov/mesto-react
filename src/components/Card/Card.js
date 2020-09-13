import React from 'react';

const Card = (props) => {
  // const [isLiked, setIsLiked] = React.useState(false);
  // const[isOwner, setIsOwner] = React.useState(false);
  // const trashBtnClassName = `card__trash-btn ${prop.isOwner && 'card__trash-btn_enabled'}`;
  // const likeBtnClassName = `card__like-btn ${prop.isLiked && 'card__like-btn_enabled'}`;
  const handleClick = () => {
    props.onCardClick(props.card);
    console.log(props.card);
  }
  
  return (
    <li className="card" key={props.card._id}>
      <button className="card__trash-btn" aria-label="Удалить картинку с подписью" type="button" name="trash"></button>
      <img className="card__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <div className="card__caption">
        <h2 className="card__title">{props.card.name}</h2>
        <div className="card__like-block">
          <button className="card__like-btn" type="button" name="like" aria-label="Поставить лайк картинке"></button>
          <p className="card__like-numbers">{props.card.likes.length}</p>
        </div>
      </div>
    </li>
  );
}
export default Card;