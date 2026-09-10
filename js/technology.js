const technologys = {
    launch: {
        name: "LAUNCH VEHICLE",
        webp: "./assets/technology/image-launch-vehicle-portrait.jpg",
        description: "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    spaceport: {
        name: "SPACEPORT",
        webp: "./assets/technology/image-spaceport-portrait.jpg",
        description: "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    capsule: {
        name: "SPACE CAPSULE",
        webp: "./assets/technology/image-space-capsule-portrait.jpg",
        description: "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    }
}

let technologyName = document.getElementById("technology-name");
let technologyImage = document.getElementById("technology-img")
let technologyDescription = document.getElementById("technology-description");

// variáveis dos botôes

let launch = document.getElementById("launch");
let spaceport = document.getElementById("spaceport");
let capsule = document.getElementById("capsule");

// Métodos de eventos

launch.addEventListener("click", function () {
    technologyName.textContent = technologys.launch.name;
    technologyImage.src = technologys.launch.webp;
    technologyDescription.textContent = technologys.launch.description;

    launch.setAttribute("aria-selected", "true");
    spaceport.setAttribute("aria-selected", "false");
    capsule.setAttribute("aria-selected", "false");
});

spaceport.addEventListener("click", function () {
    technologyName.textContent = technologys.spaceport.name;
    technologyImage.src = technologys.spaceport.webp;
    technologyDescription.textContent = technologys.spaceport.description;

    launch.setAttribute("aria-selected", "false");
    spaceport.setAttribute("aria-selected", "true");
    capsule.setAttribute("aria-selected", "false");
});

capsule.addEventListener("click", function () {
    technologyName.textContent = technologys.capsule.name;
    technologyImage.src = technologys.capsule.webp;
    technologyDescription.textContent = technologys.capsule.description;

    launch.setAttribute("aria-selected", "false");
    spaceport.setAttribute("aria-selected", "false");
    capsule.setAttribute("aria-selected", "true");
});