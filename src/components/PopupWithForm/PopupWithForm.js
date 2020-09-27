import React from 'react';

const PopupWithForm = (props) => {
  const { name,
    isOpen,
    title,
    onClose,
    submitBtnText,
    onSubmit,
    onEscPress,
    onOverlayClick,
    children } = props;
  const className = `popup popup_content_form ${name}-popup ${isOpen && 'popup_opened'}`;

  React.useEffect(() => {
    isOpen && document.addEventListener('keydown', onEscPress);
    return (() => {
      document.removeEventListener('keydown', onEscPress);
    });
  });

  return (
    <section className={className} onClick={onOverlayClick}>
      <form className="form popup__container" name={name} onSubmit={onSubmit} noValidate>
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


