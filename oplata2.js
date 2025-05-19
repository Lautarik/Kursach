document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const cardInput = document.querySelector(".num1");
    const cvcInput = document.querySelector(".num2");
    const emailInput = document.querySelector(".num3");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    form.addEventListener("submit", function (event) {
        let errorMessages = []; // Создаем массив для ошибок

        // Проверка номера карты (16 цифр)
        if (cardInput.value.trim().length !== 16) {
            errorMessages.push("Введите корректный номер карты (16 цифр).");
        }

        // Проверка CVC/CVV (3 цифры)
        if (cvcInput.value.trim().length !== 3) {
            errorMessages.push("Введите корректный CVC/CVV код (3 цифры).");
        }

        // Проверка email
        if (emailInput.value.trim() === "" || !emailPattern.test(emailInput.value)) {
            errorMessages.push("Введите корректный email.");
        }

        // Если есть ошибки, показываем их в alert и отменяем отправку формы
        if (errorMessages.length > 0) {
            event.preventDefault();
            alert(errorMessages.join("\n"));
        } else {
            // Если ошибок нет, отменяем отправку формы, показываем сообщение и осуществляем переход
            event.preventDefault();
            alert("Все оплачено!");
            window.location.href = "index.html"; // Замените адрес на необходимый
        }
    });
});
