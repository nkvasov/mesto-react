import React from 'react';

const PopupWithForm = (props) => {
  const className = `popup popup_content_form ${props.name}-popup ${props.isOpen && 'popup_opened'}`;
  return (
    <section className={className}>
      <form className="form popup__container" name={props.name} noValidate>
        <h3 className="form__title"> {props.title} </h3>
        <button className="close-btn form__close-btn" type="reset" name="close" onClick={props.onClose} aria-label="Закрыть попап"></button>
        {props.children}
        <button className="form__submit-btn" type="submit">{props.submitBtnText}</button>
      </form>
    </section>
  );
}
export default PopupWithForm

  // confirmation-popup
  // card-delete-confirmation

  // <section className="popup popup_content_form edit-profile-popup">
  //           <form className="form popup__container form-to-validate" name="edit-profile" novalidate>
  //             <h3 className="form__title">Редактировать профиль</h3>
  //             <button className="close-btn form__close-btn" type="reset" name="close" aria-label="Закрыть попап"></button>
  //             <div className="form__field">
  //               <input className="form__input" id="profile-name" type="text" name="profile-name" placeholder="Имя" required minlength="2" maxlength="40" />
  //               <span className="form__input-error form__input-error_origin_profile-name">ошибка</span>
  //             </div>
  //             <div className="form__field">
  //               <input className="form__input" id="profile-description" type="text" name="profile-description" placeholder="Описание" required minlength="2" maxlength="200" />
  //               <span className="form__input-error form__input-error_origin_profile-description"></span>
  //             </div>
  //             <button className="form__submit-btn" type="submit">Сохранить</button>
  //           </form>
  //         </section>