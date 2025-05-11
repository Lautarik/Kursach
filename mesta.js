document.addEventListener("DOMContentLoaded", function () {
    const squares = document.querySelectorAll('.kvadrat');
    const output = document.getElementById('total');
    let selectedCount = 0;

    squares.forEach(square => {
        square.style.backgroundColor = 'lightblue'; // Устанавливаем начальный цвет
        square.addEventListener('click', function () {
            if (square.style.backgroundColor === 'lightblue') {
                square.style.backgroundColor = 'lightcoral';
                selectedCount++; // Увеличиваем счётчик
            } else {
                square.style.backgroundColor = 'lightblue';
                selectedCount--; // Уменьшаем счётчик
            }
            output.textContent = `Выбрано мест: ${selectedCount}, Сумма: ${selectedCount * 20} руб.`; // Обновляем текст
        });
    });
});
