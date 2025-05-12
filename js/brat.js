document.addEventListener("DOMContentLoaded", function() {
    // Загружаем XML-файл 'cars.xml'
    fetch('xml/brat.xml')
      .then(response => {
        if (!response.ok) {
          throw new Error("Ошибка загрузки XML: " + response.statusText);
        }
        return response.text();
      })
      .then(xmlText => {
        // Парсим XML-строку с помощью DOMParser
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, "application/xml");
  
        // Извлекаем первый элемент <movie>
        const movie = xmlDoc.getElementsByTagName("movie")[0];
  
        if (movie) {
          // Извлекаем данные: описание и ссылку
          const description = movie.getElementsByTagName("description")[0].textContent.trim();
          const link = movie.getElementsByTagName("link")[0].textContent.trim();
  
          // Формируем HTML-содержимое для вывода
          const htmlContent = `
            <p>${description}</p>
            <p><a href="${link}">Перейти на страницу фильма</a></p>
          `;
          // Вставляем сгенерированный HTML в контейнер
          document.getElementById("movie-display").innerHTML = htmlContent;
        } else {
          document.getElementById("movie-display").textContent = "Фильм не найден.";
        }
      })
      .catch(error => {
        console.error("Ошибка:", error);
        document.getElementById("movie-display").textContent = "Демобилизованный из армии Данила Багров возвращается в родной город. Скучная, однообразная жизнь провинции не может устроить крепкого русского парня, и он решает поехать в Питер, испытать себя. Даниле предстоит многое узнать… и со многими разобраться.";


      });
  });
  










document.addEventListener("DOMContentLoaded", function () {
  // Находим нужные элементы
  const cinemaSelect = document.getElementById("cinema");
  const dateSelect = document.getElementById("data");
  const placesLink = document.getElementById("nowknopka");

  // Обработчик клика по ссылке "Места"
  placesLink.addEventListener("click", function (event) {
    // Если выбран вариант по умолчанию для кинотеатра или даты
    if (cinemaSelect.selectedIndex === 0 || dateSelect.selectedIndex === 0) {
      alert("Ошибка: Пожалуйста, выберите кинотеатр и дату!");
      // Предотвращаем переход по ссылке
      event.preventDefault();
    }
  });
});
