import React, { useState, useEffect } from 'react';

import Header from './Header/Header';
import Footer from './Footer/Footer';
import Main from './Main/Main';
import { api } from '../utils/Api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { enableValidation } from '../utils/utils';
import { mestoFormsSet } from '../utils/mestoFormsSet';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setCurrentUser(userData);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Включаем валидацию
  useEffect(() => {
    enableValidation(mestoFormsSet);
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(user => user._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      })
      .catch((err) => {
        console.log(err);
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
      .catch((err) => {
        console.log(err);
      });
  }

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleUpdateUser = (userData) => {
    return api.setUserInfo(userData)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  };

  const handleUpdateAvatar = (userData) => {
    return api.setAvatar(userData)
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  };

  const handleAddPlaceSubmit = (cardData) => {
    return api.postCard(cardData)
      .then((newCard) => {
        setCards([newCard, ...cards])
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        closeAllPopups();
      });
  };

  const handleEscPress = (e) => {
    if (e.key === 'Escape') {
      closeAllPopups();
    }
  }

  const closeAllPopups = () => {
    isEditProfilePopupOpen && setIsEditProfilePopupOpen(false);
    isEditAvatarPopupOpen && setIsEditAvatarPopupOpen(false);
    isAddPlacePopupOpen && setIsAddPlacePopupOpen(false);
    selectedCard && setSelectedCard(null);
  }

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <div className="page__container">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            closeAllPopups={closeAllPopups}
            onCardClick={handleCardClick}
            onUpdateUser={handleUpdateUser}
            onUpdateAvatar={handleUpdateAvatar}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
            onUpdateCards={handleAddPlaceSubmit}
            onEscPress={handleEscPress}
            isEditProfilePopupOpen={isEditProfilePopupOpen}
            isEditAvatarPopupOpen={isEditAvatarPopupOpen}
            isAddPlacePopupOpen={isAddPlacePopupOpen}
            selectedCard={selectedCard}
            cards={cards}
          />
          <Footer />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;