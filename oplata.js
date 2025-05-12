document.addEventListener("DOMContentLoaded", function () {
  // Находим элементы по селекторам
  const form = document.querySelector(".but form");
  // Так как оба поля имеют класс "num", можно выбрать их как массив
  const inputs = document.querySelectorAll("input.num");
  // Для select можно выбрать элемент по селектору с классом или атрибутом name
  const paymentSelect = document.querySelector("select.mySelect");

  form.addEventListener("submit", function (event) {
    // Проверка: если один из инпутов пустой или не выбран пункт в select (значение пустая строка)
    if (
      Array.from(inputs).some((input) => input.value.trim() === "") ||
      paymentSelect.value.trim() === ""
    ) {
      // Выводим сообщение об ошибке
      alert("Ошибка: Пожалуйста, заполните все поля и выберите платежную систему!");
      // Предотвращаем отправку формы
      event.preventDefault();
    }
  });
});








