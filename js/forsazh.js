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
        document.getElementById("movie-display").textContent = "Его зовут Брайан, и он — фанатик турбин и нитроускорителей. Его цель — быть принятым в автобанду легендарного Доминика Торетто, чемпиона опасных и незаконных уличных гонок. Но это лишь часть правды… Брайан также полицейский, имеющий задание войти в доверие к Торетто, подозреваемому в причастности к дерзким грабежам трейлеров, совершенным прямо «с колес».";


      });
  });
  










