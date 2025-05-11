document.addEventListener("DOMContentLoaded", function() {
    // Загружаем XML-файл 'cars.xml'
    fetch('xml/perevodchik.xml')
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
        document.getElementById("movie-display").textContent = "Джон Кинли не помнит, как выжил, попав в окружение врага в Афганистане, но понимает, что обязан жизнью местному переводчику по имени Ахмед. Именно ему удалось отбить раненного Кинли и на себе вытащить через опасную территорию. Теперь чувство долга не дает Джону покоя и он решает рискнуть всем, чтобы вернуться за Ахмедом и его семьей. На обоих объявлена охота, действовать приходится в одиночку, но он понимает, что не может бросить своего товарища в беде.";


      });
  });
  










