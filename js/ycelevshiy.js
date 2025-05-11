document.addEventListener("DOMContentLoaded", function() {
    // Загружаем XML-файл 'cars.xml'
    fetch('xml/ycelevshiy.xml')
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
        document.getElementById("movie-display").textContent = "Афганистан, 2005 год. Команда американских спецназовцев получает задание обезвредить известного лидера талибов Ахмада Шаха. Попав в ловушку, солдаты принимают неравный кровопролитный бой, и все они погибают героями. Все, кроме одного. Для уцелевшего Маркуса Латтрела бой только начинается: он любой ценой должен выжить и пробраться к «своим». Когда почти всё потеряно, ему решается помочь Гулаб — мирный человек, ненавидящий войну.";


      });
  });
  










