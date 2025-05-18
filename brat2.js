document.addEventListener("DOMContentLoaded", function () {
    // === Загрузка данных из XML ===
    fetch("brat2.xml")
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            let movieTitle = document.getElementById("movie-title").textContent.trim(); // Получаем название фильма
            let movies = data.getElementsByTagName("movie");
            let found = false;

            for (let movie of movies) {
                let title = movie.getElementsByTagName("title")[0].textContent.trim();
                let description = movie.getElementsByTagName("description")[0].textContent;

                if (title === movieTitle) { // Если найден нужный фильм
                    document.getElementById("movie-display").innerHTML = `<p>${description}</p>`;
                    found = true;
                    break;
                }
            }

            if (!found) {
                document.getElementById("movie-display").innerHTML = "<p>Описание не найдено</p>";
            }
        })
        .catch(error => console.error("Ошибка загрузки XML:", error));

    // === Проверка заполненности формы ===
    document.querySelector("form").addEventListener("submit", function (event) {
        let cinema = document.getElementById("cinema").value;
        let date = document.getElementById("data").value;

        console.log("Выбранный кинотеатр:", cinema);
        console.log("Выбранная дата:", date);

        if (!cinema || !date) {
            alert("Пожалуйста, выберите кинотеатр и дату!");
            event.preventDefault(); // Останавливает отправку формы
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
  // Находим селекты и форму по их id
  const cinemaSelect = document.getElementById("cinema");
  const dateSelect = document.getElementById("data");
  const myForm = document.getElementById("myForm");

  // Обработчик отправки формы
  myForm.addEventListener("submit", function (event) {
    // Если выбран вариант по умолчанию у кинотеатра или даты
    if (cinemaSelect.selectedIndex === 0 || dateSelect.selectedIndex === 0) {
      alert("Ошибка: Пожалуйста, выберите кинотеатр и дату!");
      // Отменяем отправку формы
      event.preventDefault();
    }
  });
});
