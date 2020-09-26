import React, { useContext, useState, useEffect, useRef } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  const currentUser = useContext(CurrentUserContext);
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateAvatar({
      avatar: inputRef.current.value,
    });
  };

  return (
    <PopupWithForm
      name='update-avatar'
      title='Обновить аватар'
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      submitBtnText='Сохранить'>
      <div className="form__field">
        <input
          ref={inputRef}
          defaultValue={currentUser.avatar}
          className="form__input"
          id="avatar-link"
          type="url"
          name="avatar-link"
          placeholder="Ссылка на картинку"
          required />
        <span className="form__input-error form__input-error_origin_avatar-link" />
      </div>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;