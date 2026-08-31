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
        description: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
        distance: "225 MIL. km",
        travel: "9 months",
    },
    europa: {
        name: "Europa",
        webp: "./assets/destination/image-europa.webp",
        description: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
        distance: "628 MIL. km",
        travel: "3 years",
    },
    titan: {
        name: "Titan",
        webp: "./assets/destination/image-titan.webp",
        description: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
        distance: "1.6 BIL. km",
        travel: "7 years",
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