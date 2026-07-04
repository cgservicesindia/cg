/*=========================================
CG SERVICES
script.js
=========================================*/

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

// =========================
// Mobile Menu
// =========================

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("active")) {

        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    }

});

// =========================
// Close Menu After Click
// =========================

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

// =========================
// Sticky Header Shadow
// =========================

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.boxShadow = "0 12px 30px rgba(0,0,0,.08)";

    } else {

        header.style.boxShadow = "none";

    }

});

// =========================
// Scroll Reveal
// =========================

const revealElements = document.querySelectorAll(

    ".hero-left,\
    .hero-right,\
    .trusted-item,\
    .about-image,\
    .about-content,\
    .service-card,\
    .process-card,\
    .why-content,\
    .why-image,\
    .contact-info,\
    .contact-form,\
    .cta-box"

);

const reveal = () => {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach(el => {

        const top = el.getBoundingClientRect().top;

        if (top < trigger) {

            el.classList.add("show");

        }

    });

};

window.addEventListener("scroll", reveal);

window.addEventListener("load", reveal);

// =========================
// Counter Animation
// =========================

const counters = document.querySelectorAll(".stat-card h2");

let counterStarted = false;

function startCounters() {

    if (counterStarted) return;

    const hero = document.querySelector(".hero-stats");

    if (!hero) return;

    const top = hero.getBoundingClientRect().top;

    if (top > window.innerHeight) return;

    counterStarted = true;

    counters.forEach(counter => {

        const original = counter.innerText;

        const target = parseInt(original);

        let count = 0;

        const speed = target / 60;

        const update = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText = original;

            }

        };

        update();

    });

}

window.addEventListener("scroll", startCounters);

window.addEventListener("load", startCounters);

// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

// =========================
// Contact Form Demo
// =========================

const form = document.querySelector(".contact-form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert(
            "Thank you for contacting CG Services.\n\nWe will get back to you shortly."
        );

        form.reset();

    });

}

// =========================
// Floating Cards Mouse Effect
// =========================

const hero = document.querySelector(".hero");

const cards = document.querySelectorAll(".floating-card");

if (hero) {

    hero.addEventListener("mousemove", e => {

        const x = (window.innerWidth / 2 - e.pageX) / 60;
        const y = (window.innerHeight / 2 - e.pageY) / 60;

        cards.forEach(card => {

            card.style.transform =
                `translate(${x}px,${y}px)`;

        });

    });

    hero.addEventListener("mouseleave", () => {

        cards.forEach(card => {

            card.style.transform = "translate(0,0)";

        });

    });

}

// =========================
// Fade In Class
// =========================

const style = document.createElement("style");

style.innerHTML = `

.hero-left,
.hero-right,
.trusted-item,
.about-image,
.about-content,
.service-card,
.process-card,
.why-content,
.why-image,
.contact-info,
.contact-form,
.cta-box{

opacity:0;

transform:translateY(40px);

transition:.8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

.nav-links a.active{

color:#ba9653;

font-weight:600;

}

`;

document.head.appendChild(style);
