/*==================================================
CG SERVICES
script.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*=========================================
        SMOOTH SCROLL
    =========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 30,

                behavior: "smooth"

            });

        });

    });


    /*=========================================
        HERO PARALLAX
    =========================================*/

    const hero = document.querySelector(".hero");

    const city = document.querySelector(".city");
    const team = document.querySelector(".team");
    const growth = document.querySelector(".growth");
    const analytics = document.querySelector(".analytics-left");
    const circles = document.querySelectorAll(".service-icon");

    if (hero) {

        hero.addEventListener("mousemove", (e) => {

            const x = (e.clientX / window.innerWidth - .5);
            const y = (e.clientY / window.innerHeight - .5);

            if (city) {

                city.style.transform =
                    `translate(${x * 18}px,${y * 12}px)`;

            }

            if (growth) {

                growth.style.transform =
                    `translate(${x * -25}px,${y * -18}px)`;

            }

            if (analytics) {

                analytics.style.transform =
                    `translate(${x * 20}px,${y * 18}px)`;

            }

            circles.forEach((circle, i) => {

                circle.style.transform =
                    `translateY(${Math.sin(Date.now() / 600 + i) * 4}px)`;

            });

        });

    }


    /*=========================================
        FADE IN
    =========================================*/

    const observer = new IntersectionObserver((entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .15

    });


    document.querySelectorAll(

        ".about,\
        .services,\
        .vision-strip,\
        .contact,\
        .quick-box,\
        .service-card,\
        .vision-item,\
        .about-image,\
        .about-content,\
        .contact-info,\
        .contact-form"

    ).forEach(el => {

        observer.observe(el);

    });


    /*=========================================
        BUTTON RIPPLE
    =========================================*/

    document.querySelectorAll(".primary-btn").forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-4px)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "translateY(0)";

        });

    });


    /*=========================================
        SERVICE CARD HOVER
    =========================================*/

    document.querySelectorAll(".service-card").forEach(card => {

        card.addEventListener("mouseenter", () => {

            card.style.boxShadow =
                "0 25px 60px rgba(19,49,82,.18)";

        });

        card.addEventListener("mouseleave", () => {

            card.style.boxShadow =
                "";

        });

    });


    /*=========================================
        QUICK BOX
    =========================================*/

    document.querySelectorAll(".quick-box").forEach(box => {

        box.addEventListener("mouseenter", () => {

            box.style.transform = "translateY(-10px)";

        });

        box.addEventListener("mouseleave", () => {

            box.style.transform = "translateY(0)";

        });

    });


    /*=========================================
        CONTACT FORM
    =========================================*/

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const button = form.querySelector("button");

            button.innerHTML = "Sending...";

            button.disabled = true;

            setTimeout(() => {

                button.innerHTML = "✓ Enquiry Sent";

                button.style.background = "#198754";

                form.reset();

            }, 1500);

        });

    }


    /*=========================================
        HERO ICON FLOAT
    =========================================*/

    circles.forEach((icon, index) => {

        icon.animate(

            [

                {

                    transform: "translateY(0)"

                },

                {

                    transform: "translateY(-8px)"

                },

                {

                    transform: "translateY(0)"

                }

            ],

            {

                duration: 2500 + (index * 250),

                iterations: Infinity

            }

        );

    });


    /*=========================================
        GROWTH IMAGE FLOAT
    =========================================*/

    if (growth) {

        growth.animate(

            [

                {

                    transform: "translateY(0px)"

                },

                {

                    transform: "translateY(-12px)"

                },

                {

                    transform: "translateY(0px)"

                }

            ],

            {

                duration: 3500,

                iterations: Infinity

            }

        );

    }


});


/*=========================================
CREATE CSS THROUGH JS
=========================================*/

const style = document.createElement("style");

style.innerHTML = `

.about,
.services,
.contact,
.vision-strip,
.about-image,
.about-content,
.contact-info,
.contact-form,
.service-card,
.quick-box,
.vision-item{

opacity:0;
transform:translateY(40px);
transition:.9s ease;

}

.show{

opacity:1;
transform:translateY(0);

}

`;

document.head.appendChild(style);
