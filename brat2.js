document.addEventListener("DOMContentLoaded", function () {
    fetch("brat2.xml")
        .then(response => response.text())
        .then(str => new window.DOMParser().parseFromString(str, "text/xml"))
        .then(data => {
            let movie = data.getElementsByTagName("movie")[0];
            let description = movie.getElementsByTagName("description")[0].textContent;
            document.getElementById("movie-display").innerHTML = `<p>${description}</p>`;
        })
        .catch(error => console.error("Ошибка загрузки XML:", error));
});
