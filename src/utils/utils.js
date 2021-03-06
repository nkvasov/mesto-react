import FormValidator from './FormValidator';

// Функция включает валидацию для всех форм в документе
export const enableValidation = function(formSettings) {
  const forms = Array.from(document.querySelectorAll('.form-to-validate'));
  forms.forEach((form) => {
    const formValidator = new FormValidator(formSettings, form);
    formValidator.enableValidation();
  });
}
