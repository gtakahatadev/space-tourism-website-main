const crew = {
    commander: {
        role: "COMMANDER",
        name: "DOUGLAS HURLEY",
        webp: "./assets/crew/image-douglas-hurley.webp",
        description: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    specialist: {
        role: "MISSION SPECIALIST",
        name: "MARK SHUTTLEWORTH",
        webp: "./assets/crew/image-mark-shuttleworth.webp",
        description: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    pilot: {
        role: "PILOT",
        name: "VICTOR GLOVER",
        webp: "./assets/crew/image-victor-glover.webp",
        description: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    engineer: {
        role: "FLIGHT ENGINEER",
        name: "ANOUSHEH ANSARI",
        webp: "./assets/crew/image-anousheh-ansari.webp",
        description: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    }
}

let crewName = document.getElementById("crew-name");
let crewImage = document.getElementById("crew-img")
let crewDescription = document.getElementById("crew-description");
let crewRole = document.getElementById("crew-role");

// variáveis dos botôes

let commander = document.getElementById("commander");
let specialist = document.getElementById("specialist");
let pilot = document.getElementById("pilot");
let engineer = document.getElementById("engineer");

// Métodos de eventos

commander.addEventListener("click", function () {
    crewName.textContent = crew.commander.name;
    crewImage.src = crew.commander.webp;
    crewDescription.textContent = crew.commander.description;
    crewRole.textContent = crew.commander.role;

    commander.setAttribute("aria-selected", "true");
    specialist.setAttribute("aria-selected", "false");
    pilot.setAttribute("aria-selected", "false");
    engineer.setAttribute("aria-selected", "false");
});

specialist.addEventListener("click", function () {
    crewName.textContent = crew.specialist.name;
    crewImage.src = crew.specialist.webp;
    crewDescription.textContent = crew.specialist.description;
    crewRole.textContent = crew.specialist.role;

    commander.setAttribute("aria-selected", "false");
    specialist.setAttribute("aria-selected", "true");
    pilot.setAttribute("aria-selected", "false");
    engineer.setAttribute("aria-selected", "false");
});

pilot.addEventListener("click", function () {
    crewName.textContent = crew.pilot.name;
    crewImage.src = crew.pilot.webp;
    crewDescription.textContent = crew.pilot.description;
    crewRole.textContent = crew.pilot.role;

    commander.setAttribute("aria-selected", "false");
    specialist.setAttribute("aria-selected", "false");
    pilot.setAttribute("aria-selected", "true");
    engineer.setAttribute("aria-selected", "false");
});

engineer.addEventListener("click", function () {
    crewName.textContent = crew.engineer.name;
    crewImage.src = crew.engineer.webp;
    crewDescription.textContent = crew.engineer.description;
    crewRole.textContent = crew.engineer.role;

    commander.setAttribute("aria-selected", "false");
    specialist.setAttribute("aria-selected", "false");
    pilot.setAttribute("aria-selected", "false");
    engineer.setAttribute("aria-selected", "true");
});