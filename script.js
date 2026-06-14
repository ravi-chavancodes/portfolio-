// =============================
// TYPING EFFECT
// =============================

const typingText =
document.querySelector(".typing-text");

const text =
"BSc IT Student & Aspiring Software Developer";

let i = 0;

typingText.inanerHTML = "";

function typeWriter() {

    if (i < text.length) {

        typingText.innerHTML += text.charAt(i);

        i++;

        setTimeout(typeWriter, 50);
    }
}

typeWriter();


// =============================
// SCROLL REVEAL
// =============================

const revealElements =
document.querySelectorAll(
".card, .project-card, .skill-card"
);

function reveal() {

    revealElements.forEach((element) => {

        const windowHeight =
        window.innerHeight;

        const revealTop =
        element.getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {

            element.classList.add("active");
        }
    });
}

window.addEventListener(
"scroll",
reveal
);

reveal();


// =============================
// ACTIVE NAVIGATION
// =============================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(
".sidebar-links a"
);

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
        section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current =
            section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {

        link.classList.remove("current");

        if (
            link.getAttribute("href")
            === `#${current}`
        ) {

            link.classList.add("current");
        }
    });
});


// =============================
// SCROLL TO TOP BUTTON
// =============================

const topBtn =
document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";
    }
});

topBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// =============================
// SKILL CARD EFFECT
// =============================

const skillCards =
document.querySelectorAll(".skill-card");

skillCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-12px) scale(1.08)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0) scale(1)";
    });
});


// =============================
// PROJECT CARD EFFECT
// =============================

const projectCards =
document.querySelectorAll(".project-card");

projectCards.forEach((card) => {

    card.addEventListener("mouseenter", () => {

        card.style.transform =
        "translateY(-12px) scale(1.03)";
    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
        "translateY(0) scale(1)";
    });
});


// =============================
// FADE IN BODY
// =============================

window.addEventListener("load", () => {

    document.body.style.opacity = "1";
});