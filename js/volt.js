document.addEventListener("DOMContentLoaded", function() {
    // Загружаем XML-файл 'cars.xml'
    fetch('xml/volt.xml')
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
        document.getElementById("movie-display").textContent = "Пес по кличке «Вольт» всю жизнь снимается в телевизионном сериале, где его герой — суперпес — спасает человечество, используя свои необычайные способности. Сам Вольт свято верит в собственную неуязвимость, невероятную силу, и умение летать. Когда же судьба забрасывает его в полный опасностей Большой Город, он все еще думает, что это — лишь очередной эпизод телесериала…";
      });
  });
  