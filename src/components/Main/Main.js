import React, { useContext, useState, useEffect } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup.js';
// import { api } from '../../utils/Api.js';
import Card from '../Card/Card.js';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import EditProfilePopup from '../EditProfilePopup/EditProfilePopup';
import EditAvatarPopup from '../EditAvatarPopup/EditAvatarPopup';
import AddPlacePopup from '../AddPlacePopup/AddPlacePopup';

const Main = (props) => {
  const currentUser = useContext(CurrentUserContext);

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
          {props.cards.map((card) => (
            <Card
              card={card}
              onCardClick={props.onCardClick}
              key={card._id}
              onCardLike={props.onCardLike}
              onCardDelete={props.onCardDelete} />
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

      <AddPlacePopup
        isOpen={props.isAddPlacePopupOpen}
        onClose={props.closeAllPopups}
        onAddPlace={props.onAddPlace} />


    </main>

  );
}

export default Main;

