import React, { useContext, useState, useEffect } from 'react';
import { CurrentUserContext } from '../../contexts/CurrentUserContext';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const AddPlacePopup = ({ isOpen, onClose, onUpdateCards }) => {


  return (
    <PopupWithForm
      name='add-card'
      title='Новое место'
      isOpen={isOpen}
      onClose={onClose}
      submitBtnText='Создать'
      onSubmit={onUpdateCards} >
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
  )
}

export default AddPlacePopup;