document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("form").addEventListener("submit", function(event) {
        let inputs = document.querySelectorAll(".num");
        let allFilled = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });

        if (!allFilled) {
            event.preventDefault(); // Останавливаем отправку формы
            alert("Заполните все поля!");
        } else {
            alert("Регистрация прошла успешно!");
            setTimeout(function() {
                window.location.href = "index.html"; // Перенос через 1 секунду
            }, 1000);
        }
    });
});
