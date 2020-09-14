import React from 'react';

const PopupWithForm = (props) => {
  const className = `popup popup_content_form ${props.name}-popup ${props.isOpen && 'popup_opened'}`;
  // props.isOpen && document.addEventListener('keydown', props.onClose);

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
};
export default PopupWithForm;


