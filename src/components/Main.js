import React from 'react';
import PopupWithForm from './PopupWithForm/PopupWithForm';

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <main className="content">

        <section className="profile">
          <div className="profile__content">
            <img src="./images/profile_kusto.jpg" className="profile__avatar" alt="фото Жак-Ив Кусто" onClick={this.props.onEditAvatar} />
            <div className="profile__info">

              <div className="profile__title-block">
                <h1 className="profile__name">Жак-Ив Кусто</h1>
                <button className="profile__edit-btn" type="button" onClick={this.props.onEditProfile} aria-label="Редактировать профиль"></button>
              </div>
              <p className="profile__description">Исследователь океана</p>

            </div>

          </div>
          <button className="add-btn" type="button" onClick={this.props.onAddPlace} aria-label="Добавить место"></button>

        </section>

        <section className="cards">
          <ul className="cards__container"></ul>
        </section>

        <section className="popup popup_content_form confirmation-popup">
          <form className="form popup__container" name="card-delete-confirmation" novalidate>
            <h3 className="form__title">Вы уверены?</h3>
            <button className="close-btn form__close-btn" type="reset" name="close" aria-label="Закрыть попап"></button>
            <button className="form__submit-btn" type="submit">Да</button>
          </form>
        </section>

        <PopupWithForm
          name='update-avatar'
          title='Обновить аватар'
          isOpen={this.props.isEditAvatarPopupOpen}
          submitBtnText='Сохранить'>
          <div className="form__field">
            <input className="form__input" id="avatar-link" type="url" name="avatar-link" placeholder="Ссылка на картинку" required />
            <span className="form__input-error form__input-error_origin_avatar-link">ошибка</span>
          </div>
        </PopupWithForm>

        {/* <section className="popup popup_content_form update-avatar-popup">
          <form className="form popup__container form-to-validate" name="update-avatar" novalidate>
            <h3 className="form__title">Обновить аватар</h3>
            <button className="close-btn form__close-btn" type="reset" name="close" aria-label="Закрыть попап"></button>
            <div className="form__field">
              <input className="form__input" id="avatar-link" type="url" name="avatar-link" placeholder="Ссылка на картинку" required />
              <span className="form__input-error form__input-error_origin_avatar-link">ошибка</span>
            </div>
            <button className="form__submit-btn" type="submit">Сохранить</button>
          </form>
        </section> */}

        <PopupWithForm
          name='edit-profile'
          title='Редактировать профиль'
          isOpen={this.props.isEditProfilePopupOpen}
          submitBtnText='Сохранить'>
          <div className="form__field">
            <input className="form__input" id="profile-name" type="text" name="profile-name" placeholder="Имя" required minlength="2" maxlength="40" />
            <span className="form__input-error form__input-error_origin_profile-name">ошибка</span>
          </div>
          <div className="form__field">
            <input className="form__input" id="profile-description" type="text" name="profile-description" placeholder="Описание" required minlength="2" maxlength="200" />
            <span className="form__input-error form__input-error_origin_profile-description"></span>
          </div>
        </PopupWithForm>


        <section className="popup popup_content_figure image-popup">
          <figure className="figure popup__container">
            <button className="close-btn figure__close-btn" type="button" aria-label="Закрыть попап"></button>
            <img className="figure__image" src="#" alt="описание" />
            <figcaption className="figure__caption">Подпись</figcaption>
          </figure>
        </section>

        <PopupWithForm
        name='add-card'
        title='Новое место'
        isOpen={this.props.isAddPlacePopupOpen}
        submitBtnText='Создать'>
          <div className="form__field">
            <input className="form__input" id="card-name" type="text" name="card-name" placeholder="Название" required minlength="1" maxlength="30" />
            <span className="form__input-error form__input-error_origin_card-name"></span>
          </div>
          <div className="form__field">
            <input className="form__input" id="card-link" type="url" name="card-link" placeholder="Ссылка на картинку" required />
            <span className="form__input-error form__input-error_origin_card-link"></span>
          </div>
        </PopupWithForm>

        {/* <section className="popup popup_content_form card-popup">
          <form className="form popup__container form-to-validate" name="add-card" novalidate>
            <h3 className="form__title">Новое место</h3>
            <button className="close-btn form__close-btn" type="reset" aria-label="Закрыть попап"></button>
            <div className="form__field">
              <input className="form__input" id="card-name" type="text" name="card-name" placeholder="Название" required minlength="1" maxlength="30" />
              <span className="form__input-error form__input-error_origin_card-name"></span>
            </div>
            <div className="form__field">
              <input className="form__input" id="card-link" type="url" name="card-link" placeholder="Ссылка на картинку" required />
              <span className="form__input-error form__input-error_origin_card-link"></span>
            </div>
            <button className="form__submit-btn" type="submit">Создать</button>
          </form>
        </section> */}

      </main>

    );
  }
}