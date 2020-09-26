import React, { useContext, useState, useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup.js';
import { api } from '../../utils/Api.js';
import Card from '../Card/Card.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup';

const Main = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const [cards, setCards] = useState([]);

  function handleCardLike(card) {
    const isLiked = card.likes.some(user => user._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(() => {
        const deletedCardIndex = cards.findIndex((c) => c._id === card._id);
        const newCards = cards.slice();
        newCards.splice(deletedCardIndex, 1);
        setCards(newCards);
      })
  }

  useEffect(() => {
    api.getInitialCards()
      .then((initialCards) => {
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <main className="content">

      <section className="profile">
        <div className="profile__content">
          <img
            src={currentUser.avatar}
            className="profile__avatar"
            alt={`фото ${currentUser.name}`}
            onClick={props.onEditAvatar} />
          <div className="profile__info">
            <div className="profile__title-block">
              <h1 className="profile__name">{currentUser.name}</h1>
              <button
                className="profile__edit-btn"
                type="button"
                onClick={props.onEditProfile}
                aria-label="Редактировать профиль" />
            </div>
            <p className="profile__description">{currentUser.about}</p>
          </div>
        </div>
        <button
          className="add-btn"
          type="button"
          onClick={props.onAddPlace}
          aria-label="Добавить место" />
      </section>

      <section className="cards">
        <ul className="cards__container">
          {cards.map((card) => (
            <Card
              card={card}
              onCardClick={props.onCardClick}
              key={card._id}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete} />
          ))}
        </ul>
      </section>

      <PopupWithForm
        name='confirmation'
        title='Вы уверены?'
        onClose={props.closeAllPopups}
        submitBtnText='Да' />


      <EditAvatarPopup
        isOpen={props.isEditAvatarPopupOpen}
        onClose={props.closeAllPopups}
        onUpdateAvatar={props.onUpdateAvatar} />

      <EditProfilePopup
        isOpen={props.isEditProfilePopupOpen}
        onClose={props.closeAllPopups}
        onUpdateUser={props.onUpdateUser} />

      <ImagePopup
        card={props.selectedCard}
        onClose={props.closeAllPopups}
        isOpen={props.isImagePopupOpen} />

      <PopupWithForm
        name='add-card'
        title='Новое место'
        isOpen={props.isAddPlacePopupOpen}
        onClose={props.closeAllPopups}
        submitBtnText='Создать'>
        <div className="form__field">
          <input
            className="form__input"
            id="card-name"
            type="text"
            name="card-name"
            placeholder="Название"
            required minLength="1"
            maxLength="30" />
          <span className="form__input-error form__input-error_origin_card-name" />
        </div>
        <div className="form__field">
          <input
            className="form__input"
            id="card-link"
            type="url"
            name="card-link"
            placeholder="Ссылка на картинку"
            required />
          <span className="form__input-error form__input-error_origin_card-link" />
        </div>
      </PopupWithForm>


    </main>

  );
}

export default Main;

