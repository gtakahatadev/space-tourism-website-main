const destinations = {
    moon: {
        name: "Moon",
        webp: "./assets/destination/image-moon.webp",
        description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
    },
    mars: {
        name: "Mars",
        webp: "./assets/destination/image-mars.webp",
        description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
    },
    europa: {
        name: "Europa",
        webp: "./assets/destination/image-europa.webp",
        description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
    },
    titan: {
        name: "Titan",
        webp: "./assets/destination/image-titan.webp",
        description: "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
        distance: "384,400 km",
        travel: "3 days",
    }
}

let destinationName = document.getElementById("destinationName");
let destinationDescription = document.getElementById("destination-description");
let destinationDistance = document.getElementById("destination-distance");
let destinationTravel = document.getElementById("destination-travel");

// variáveis dos botôes

let moon = document.getElementById("moon");
let mars = document.getElementById("mars");
let europa = document.getElementById("europa");
let titan = document.getElementById("titan");

// Métodos de eventos

moon.addEventListener("click", function () { });
// quando eu clicar na função eu quero capturar o atributo
// se o valor do aria selected for true eu quero que ele não faça nada
// se for false eu preciso trocar o valor para true e renderizar (alterar os elementos: o titulo, a imagem, a descrição, distancia e tempo de viagem)
mars.addEventListener("click", function () { });

europa.addEventListener("click", function () { });

titan.addEventListener("click", function () { });