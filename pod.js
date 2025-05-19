document.addEventListener("DOMContentLoaded", () => {
  // Выбираем форму
  const form = document.querySelector("form");

  // Отслеживаем событие отправки формы
  form.addEventListener("submit", function(event) {
    // Отменяем стандартное поведение отправки формы
    event.preventDefault();

    // Получаем значения всех полей и удаляем лишние пробелы
    const message = document.querySelector(".problema")?.value.trim() || "";
    const name = document.querySelector(".imya")?.value.trim() || "";
    const email = document.querySelector(".vashemail")?.value.trim() || "";
    const phone = document.querySelector(".vashphone")?.value.trim() || "";

    // Если хотя бы одно поле не заполнено, выводим предупреждение и прекращаем выполнение
    if (!message || !name || !email || !phone) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    // Регулярное выражение для проверки корректного формата email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Пожалуйста, введите корректный email адрес");
      return;
    }

    // Если все проверки пройдены — выводим уведомление и переходим на другую страницу
    alert("Сообщение в поддержку отправлено!");
    window.location.href = "index.html"; // Замените адрес на нужную страницу
  });
});
