import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App(props) {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        isEditProfilePopupOpen={isEditProfilePopupOpen}
        isEditAvatarPopupOpen={isEditAvatarPopupOpen}
        isAddPlacePopupOpen={isAddPlacePopupOpen}
        />
        <Footer />
      </div>
      
      <template className="card-template">
        <li className="card">
          <button className="card__trash-btn" aria-label="Удалить картинку с подписью" type="button" name="trash"></button>
          <img className="card__image" src="#" alt="описание" />
          <div className="card__caption">
            <h2 className="card__title"></h2>
            <div className="card__like-block">
              <button className="card__like-btn" type="button" name="like" aria-label="Поставить лайк картинке"></button>
              <p className="card__like-numbers">777777</p>
            </div>
          </div>
        </li>
    </template>
    </div>
  );
}

export default App;