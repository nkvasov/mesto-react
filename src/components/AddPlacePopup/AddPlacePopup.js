import React, { useState } from 'react';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const AddPlacePopup = ({ isOpen, onClose, onUpdateCards, onEscPress, onOverlayClick }) => {
  const [placeName, setPlaceName] = useState('');
  const [placeUrl, setPlaceUrl] = useState('');

  const handlePlaceNameInputChange = (e) => {
    setPlaceName(e.target.value);
  };

  const handlePlaceUrlInputChange = (e) => {
    setPlaceUrl(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateCards({
      name: placeName,
      link: placeUrl
    });
    setPlaceName('');
    setPlaceUrl('')
  };

  return (
    <PopupWithForm
      name='add-card'
      title='Новое место'
      isOpen={isOpen}
      onClose={onClose}
      submitBtnText='Создать'
      onSubmit={handleSubmit}
      onEscPress={onEscPress}
      onOverlayClick={onOverlayClick} >
      <div className="form__field">
        <input
          onChange={handlePlaceNameInputChange}
          value={placeName}
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
          onChange={handlePlaceUrlInputChange}
          value={placeUrl}
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