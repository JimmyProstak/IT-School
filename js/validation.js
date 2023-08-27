const form = document.querySelectorAll(".form-validation");
form.forEach((elementForm) => {
  const validation = new JustValidate(elementForm, {});
  validation.addField(".input-name", [
    {
      rule: "required",
      errorMessage: "Поле должно быть заполнено",
    },
    {
      rule: "minLength",
      value: 3,
      errorMessage: " Малое колличество символов",
    },
    {
      rule: "maxLength",
      value: 25,
      errorMessage: "Много символов",
    },
  ]);
  validation.addField(".input-email", [
    {
      rule: "required",
      errorMessage: "Поле должно быть заполнено",
    },
    {
      rule: "email",
      errorMessage: "Введите корректный email",
    },
  ]);
  validation.addField(".input-tel", [
    {
      rule: "required",
      errorMessage: "Поле должно быть заполнено",
    },
  ]);
});
