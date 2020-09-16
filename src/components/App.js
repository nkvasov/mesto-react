import React from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';

function App(props) {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();

  // const handleLogIn = (id) => {
  //   setUserId(id);
  // }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  }

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  }

  const closeAllPopups = () => {
    isEditProfilePopupOpen && setIsEditProfilePopupOpen(false);
    isEditAvatarPopupOpen && setIsEditAvatarPopupOpen(false);
    isAddPlacePopupOpen && setIsAddPlacePopupOpen(false);
    isImagePopupOpen && setImagePopupOpen(false);
    setTimeout(setSelectedCard, 500);
  }

  const handleCardClick = (card) => {
    setImagePopupOpen(true);
    setSelectedCard(card);
  }

  return (
    <div className="page">
      <div className="page__container">
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onClosePopups={closeAllPopups}
          onCardClick={handleCardClick}
          // onLoadPage={handleLogIn}
          isEditProfilePopupOpen={isEditProfilePopupOpen}
          isEditAvatarPopupOpen={isEditAvatarPopupOpen}
          isAddPlacePopupOpen={isAddPlacePopupOpen}
          isImagePopupOpen={isImagePopupOpen}
          selectedCard={selectedCard}
          // userId={userId}
        />
        <Footer />
      </div>

    </div>
  );
}

export default App;