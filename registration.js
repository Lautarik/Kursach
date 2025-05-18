document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("register-btn").addEventListener("click", function() {
        let inputs = document.querySelectorAll(".num");
        let emailInput = document.querySelector('input[type="email"]');
        let allFilled = true;
        let emailValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                allFilled = false;
            }
        });

        // Проверка email с регулярным выражением
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(emailInput.value.trim())) {
            emailValid = false;
        }

        if (!allFilled) {
            alert("Заполните все поля!");
        } else if (!emailValid) {
            alert("Введите корректный email!");
        } else {
            alert("Регистрация прошла успешно!");
            window.location.href = "index.html"; // Переход на главную страницу
        }
    });
});
