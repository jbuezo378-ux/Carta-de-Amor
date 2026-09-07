/* =========================================
   CONFIGURACIÓN
========================================= */

// Cambia este nombre por el nombre de tu pareja.
const nombrePareja = "Arandi";


/* =========================================
   ELEMENTOS
========================================= */

const intro = document.getElementById("intro");
const startButton = document.getElementById("startButton");
const mainContent = document.getElementById("mainContent");

const nameElement = document.getElementById("name");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");

const answerSection = document.getElementById("answerSection");

const petalsContainer = document.getElementById("petals-container");
const heartsContainer = document.getElementById("hearts-container");
const confettiContainer = document.getElementById("confetti-container");


/* =========================================
   COLOCAR NOMBRE
========================================= */

nameElement.textContent = nombrePareja;


/* =========================================
   ABRIR LA CARTA
========================================= */

startButton.addEventListener("click", () => {

    intro.classList.add("hidden");

    setTimeout(() => {

        mainContent.classList.add("visible");

        createPetals();

        createFloatingHearts();

    }, 500);

});


/* =========================================
   CREAR PÉTALOS
========================================= */

function createPetal() {

    const petal = document.createElement("div");

    petal.classList.add("petal-fall");

    const flowers = [
        "🌸",
        "🌷",
        "🌹",
        "🌺",
        "🌼"
    ];

    petal.textContent =
        flowers[Math.floor(Math.random() * flowers.length)];

    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.fontSize =
        (Math.random() * 15 + 14) + "px";

    const duration =
        Math.random() * 6 + 6;

    petal.style.animationDuration =
        duration + "s";

    petal.style.animationDelay =
        Math.random() * 4 + "s";

    petalsContainer.appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, (duration + 5) * 1000);
}


function createPetals() {

    for (let i = 0; i < 25; i++) {
        setTimeout(createPetal, i * 250);
    }

    setInterval(createPetal, 900);
}


/* =========================================
   CORAZONES FLOTANDO
========================================= */

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("floating-heart");

    const hearts = [
        "♡",
        "♥",
        "💕",
        "❤"
    ];

    heart.textContent =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 18 + 15) + "px";

    heart.style.color =
        "#c75070";

    const duration =
        Math.random() * 6 + 7;

    heart.style.animationDuration =
        duration + "s";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}


function createFloatingHearts() {

    setInterval(() => {

        if (Math.random() > 0.35) {
            createHeart();
        }

    }, 1000);
}


/* =========================================
   BOTÓN NO
========================================= */

let noAttempts = 0;

const noMessages = [
    "¿Segura? 🥺",
    "Piénsalo otra vez...",
    "Ese botón no funciona 😅",
    "Creo que te equivocaste ❤️",
    "Intenta con el otro botón",
    "¿De verdad? 🥹",
    "No puedes escapar del amor ❤️"
];


noButton.addEventListener("mouseover", moveNoButton);

noButton.addEventListener("touchstart", moveNoButton);


function moveNoButton(event) {

    event.preventDefault();

    noAttempts++;

    const maxX =
        Math.max(100, window.innerWidth - 230);

    const maxY =
        Math.max(100, window.innerHeight - 120);

    const randomX =
        Math.random() * maxX - maxX / 2;

    const randomY =
        Math.random() * maxY - maxY / 2;

    noButton.style.transform =
        `translate(${randomX}px, ${randomY}px)`;

    noButton.textContent =
        noMessages[
            noAttempts % noMessages.length
        ];

}


/* =========================================
   BOTÓN SÍ
========================================= */

yesButton.addEventListener("click", () => {

    answerSection.classList.add("show");

    document.body.style.overflowX = "hidden";

    setTimeout(() => {

        answerSection.scrollIntoView({
            behavior: "smooth"
        });

    }, 100);

    createConfetti();

    createMassiveHeartExplosion();

});


/* =========================================
   CONFETI
========================================= */

function createConfettiPiece() {

    const confetti = document.createElement("div");

    confetti.classList.add("confetti");

    const symbols = [
        "❤",
        "♥",
        "✦",
        "✿",
        "❀"
    ];

    confetti.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    confetti.style.left =
        Math.random() * 100 + "vw";

    confetti.style.fontSize =
        (Math.random() * 12 + 10) + "px";

    const duration =
        Math.random() * 3 + 3;

    confetti.style.animationDuration =
        duration + "s";

    confetti.style.color =
        [
            "#c75070",
            "#e97898",
            "#dca2b2",
            "#9d3f5b",
            "#f3bd62"
        ][Math.floor(Math.random() * 5)];

    confettiContainer.appendChild(confetti);

    setTimeout(() => {
        confetti.remove();
    }, duration * 1000);
}


function createConfetti() {

    for (let i = 0; i < 120; i++) {

        setTimeout(() => {
            createConfettiPiece();
        }, i * 15);

    }
}


/* =========================================
   EXPLOSIÓN DE CORAZONES
========================================= */

function createMassiveHeartExplosion() {

    for (let i = 0; i < 35; i++) {

        setTimeout(() => {

            const heart = document.createElement("div");

            heart.classList.add("floating-heart");

            heart.textContent = "❤";

            heart.style.left =
                (40 + Math.random() * 20) + "vw";

            heart.style.bottom =
                "35vh";

            heart.style.fontSize =
                (Math.random() * 25 + 18) + "px";

            heart.style.color =
                "#c75070";

            heart.style.animationDuration =
                (Math.random() * 3 + 3) + "s";

            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, 6000);

        }, i * 50);

    }
}


/* =========================================
   EFECTO AL HACER SCROLL
========================================= */

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    },
    {
        threshold: 0.15
    }
);


document
    .querySelectorAll(".letter, .flowers-section, .question-section")
    .forEach(element => {

        observer.observe(element);

    });