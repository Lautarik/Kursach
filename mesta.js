document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll('.kvadrat');
    const output = document.getElementById('total');
    let selectedCount = 0;
    let totalSeats = squares.length;

    // Генерируем случайные занятые места (20% от общего количества)
    let occupiedSeats = new Set();
    while (occupiedSeats.size < Math.floor(totalSeats * 0.2)) {
        let randomIndex = Math.floor(Math.random() * totalSeats);
        occupiedSeats.add(randomIndex);
    }

    squares.forEach((square, index) => {
        // Если место занято, оно становится цветом lightcoral и недоступно для клика
        if (occupiedSeats.has(index)) {
            square.style.backgroundColor = 'lightcoral';
            square.style.pointerEvents = 'none';
        } else {
            // Иначе устанавливаем стандартный цвет и обработчик клика
            square.style.backgroundColor = 'lightblue';
            square.addEventListener('click', function () {
                // Переключаем выбор: если элемент светло-синий, выделяем его; если выделен, снимаем выделение
                if (square.style.backgroundColor === 'lightblue') {
                    square.style.backgroundColor = 'lightgreen';
                    selectedCount++;
                } else {
                    square.style.backgroundColor = 'lightblue';
                    selectedCount--;
                }
                // Обновляем информацию на странице
                output.textContent = `Выбрано мест: ${selectedCount}, Сумма: ${selectedCount * 20} руб.`;
            });
        }
    });

    // Обработчик клика для кнопки "Оплатить"
    document.querySelector(".otpravit").addEventListener("click", function () {
        // Если места не выбраны, выводим предупреждение
        if (selectedCount === 0) {
            alert("Пожалуйста, выберите хотя бы одно место.");
        } else {
            // Сохраняем выбранные места и итоговую сумму в localStorage
            localStorage.setItem("selectedSeats", selectedCount);
            localStorage.setItem("totalPrice", selectedCount * 20);
            // Выводим сообщение об успешной оплате
            alert(`Вы выбрали ${selectedCount} мест на сумму ${selectedCount * 20} руб.`);
            // Переходим на страницу оплаты
            window.location.href = "oplata.html"; 
        }
    });
});
