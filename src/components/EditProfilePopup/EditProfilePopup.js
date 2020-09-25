import React, { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const EditProfilePopup = ({ isOpen, onClose, onUpdateUser }) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState(currentUser.name);
  const [description, setDescription] = useState(currentUser.about);

  const handleNameInputChange = (e) => {
    setName(e.target.value);
  }
  const handleDescriptionInputChange = (e) => {
    setDescription(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name,
      about: description,
    });
  }

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser]);

  return (
    <PopupWithForm
      name='edit-profile'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitBtnText='Сохранить'>
      <div className="form__field">
        <input className="form__input"
          id="profile-name"
          type="text"
          name="profile-name"
          placeholder="Имя"
          required minLength="2"
          maxLength="40"
          value={name || ''}
          onChange={handleNameInputChange} />
        <span className="form__input-error form__input-error_origin_profile-name" />
      </div>
      <div className="form__field">
        <input className="form__input"
          id="profile-description"
          type="text"
          name="profile-description"
          placeholder="Описание"
          required minLength="2"
          value={description || ''}
          maxLength="200"
          onChange={handleDescriptionInputChange} />
        <span className="form__input-error form__input-error_origin_profile-description" />
      </div>
    </PopupWithForm>
  );
}

export default EditProfilePopup;