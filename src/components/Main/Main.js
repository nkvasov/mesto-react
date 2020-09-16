import React from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import ImagePopup from '../ImagePopup/ImagePopup.js';
import { api } from '../../utils/Api.js';
import Card from '../Card/Card.js';

const Main = (props) => {
  const [userName, setUserName] = React.useState('Инкогнито');
  const [userDescription, setUserDescription] = React.useState('Инкогнитов');
  const [userAvatar, setUserAvatar] = React.useState('../images/profile_kusto.jpg');
  const [cards, setCards] = React.useState([]);
  const [userId, setUserId] = React.useState(null);

  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        // console.log(initialCards);
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserId(userData._id)
        setUserAvatar(userData.avatar);
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
            src={userAvatar}
            className="profile__avatar"
            alt={`фото ${userName}`}
            onClick={props.onEditAvatar} />
          <div className="profile__info">
            <div className="profile__title-block">
              <h1 className="profile__name">{userName}</h1>
              <button
                className="profile__edit-btn"
                type="button"
                onClick={props.onEditProfile}
                aria-label="Редактировать профиль" />
            </div>
            <p className="profile__description">{userDescription}</p>
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
              wasLiked={card.likes.some(user => user._id === userId)}
              isOwner={card.owner._id === userId} />
          ))}
        </ul>
      </section>

      <PopupWithForm
        name='confirmation'
        title='Вы уверены?'
        onClose={props.onClosePopups}
        submitBtnText='Да' />

      <PopupWithForm
        name='update-avatar'
        title='Обновить аватар'
        isOpen={props.isEditAvatarPopupOpen}
        onClose={props.onClosePopups}
        submitBtnText='Сохранить'>
        <div className="form__field">
          <input
            className="form__input"
            id="avatar-link"
            type="url"
            name="avatar-link"
            placeholder="Ссылка на картинку"
            required />
          <span className="form__input-error form__input-error_origin_avatar-link" />
        </div>
      </PopupWithForm>

      <PopupWithForm
        name='edit-profile'
        title='Редактировать профиль'
        isOpen={props.isEditProfilePopupOpen}
        onClose={props.onClosePopups}
        submitBtnText='Сохранить'>
        <div className="form__field">
          <input className="form__input"
            id="profile-name"
            type="text"
            name="profile-name"
            placeholder="Имя"
            required minLength="2"
            maxLength="40" />
          <span className="form__input-error form__input-error_origin_profile-name" />
        </div>
        <div className="form__field">
          <input className="form__input"
            id="profile-description"
            type="text"
            name="profile-description"
            placeholder="Описание"
            required minLength="2"
            maxLength="200" />
          <span className="form__input-error form__input-error_origin_profile-description" />
        </div>
      </PopupWithForm>

      <ImagePopup
        card={props.selectedCard}
        onClose={props.onClosePopups}
        isOpen={props.isImagePopupOpen} />

      <PopupWithForm
        name='add-card'
        title='Новое место'
        isOpen={props.isAddPlacePopupOpen}
        onClose={props.onClosePopups}
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
