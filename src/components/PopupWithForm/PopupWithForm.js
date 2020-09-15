import React from 'react';

const PopupWithForm = (props) => {
  const { name,
    isOpen,
    title,
    onClose,
    submitBtnText,
    children } = props;
  const className = `popup popup_content_form ${name}-popup ${isOpen && 'popup_opened'}`;

  return (
    <section className={className}>
      <form className="form popup__container" name={name} noValidate>
        <h3 className="form__title"> {title} </h3>
        <button
          className="close-btn form__close-btn"
          type="reset"
          name="close"
          onClick={onClose}
          aria-label="Закрыть попап" />
        {children}
        <button className="form__submit-btn" type="submit">{submitBtnText}</button>
      </form>
    </section>
  );
};
export default PopupWithForm;


