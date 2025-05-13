document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll('.kvadrat');
    const output = document.getElementById('total');
    let selectedCount = 0;
    let totalSeats = squares.length;

    // Генерируем случайные занятые места
    let occupiedSeats = new Set();
    while (occupiedSeats.size < Math.floor(totalSeats * 0.2)) { // 20% мест заняты
        let randomIndex = Math.floor(Math.random() * totalSeats);
        occupiedSeats.add(randomIndex);
    }

    squares.forEach((square, index) => {
        // Если место занято, оно становится желтым и недоступным
        if (occupiedSeats.has(index)) {
            square.style.backgroundColor = 'lightcoral';
            square.style.pointerEvents = 'none'; // Запрещает клики
        } else {
            square.style.backgroundColor = 'lightblue';
            square.addEventListener('click', function () {
                if (square.style.backgroundColor === 'lightblue') {
                    square.style.backgroundColor = 'lightgreen';
                    selectedCount++;
                } else {
                    square.style.backgroundColor = 'lightblue';
                    selectedCount--;
                }
                output.textContent = `Выбрано мест: ${selectedCount}, Сумма: ${selectedCount * 20} руб.`;
            });
        }
    });

    // Сохранение выбранных мест в localStorage при переходе на оплату
    document.querySelector(".otpravit").addEventListener("click", function () {
        localStorage.setItem("selectedSeats", selectedCount);
        localStorage.setItem("totalPrice", selectedCount * 20);
    });
});
