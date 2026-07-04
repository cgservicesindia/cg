/*==================================================
CG SERVICES
script.js
==================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
    MOBILE MENU
    ==========================================*/

    const menuBtn = document.querySelector(".menu-btn");
    const navMenu = document.querySelector("nav ul");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", () => {

            navMenu.classList.toggle("active");

            menuBtn.innerHTML = navMenu.classList.contains("active")
                ? '<i class="fa-solid fa-xmark"></i>'
                : '<i class="fa-solid fa-bars"></i>';

        });

    }


    /*==========================================
    STICKY HEADER
    ==========================================*/

    const header = document.getElementById("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.style.boxShadow = "0 12px 35px rgba(0,0,0,.08)";
            header.style.background = "rgba(255,255,255,.98)";

        } else {

            header.style.boxShadow = "none";
            header.style.background = "rgba(255,255,255,.94)";

        }

    });


    /*==========================================
    SMOOTH SCROLL
    ==========================================*/

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            });

            if (navMenu.classList.contains("active")) {

                navMenu.classList.remove("active");

                menuBtn.innerHTML =
                    '<i class="fa-solid fa-bars"></i>';

            }

        });

    });


    /*==========================================
    HERO PARALLAX
    ==========================================*/

    const hero = document.querySelector(".hero");



    /*==========================================
    FADE ON SCROLL
    ==========================================*/

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {

        threshold: .15

    });

    document.querySelectorAll(

        ".vision-item,\
        .service-card,\
        .quick-item,\
        .about-image,\
        .about-content,\
        .contact-info,\
        .contact-form,\
        .cta-box"

    ).forEach(el => observer.observe(el));


    /*==========================================
    BUTTON HOVER
    ==========================================*/

    document.querySelectorAll(

        ".nav-btn,.cta-btn,.contact-form button"

    ).forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-3px)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "translateY(0)";

        });

    });


    /*==========================================
    CONTACT FORM
    ==========================================*/

    const form = document.querySelector(".contact-form form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            const button = this.querySelector("button");

            button.disabled = true;

            button.innerHTML = "Sending...";

            setTimeout(() => {

                button.innerHTML = "✓ Message Sent";

                button.style.background = "#198754";

                form.reset();

                setTimeout(() => {

                    button.innerHTML = "Send Message";

                    button.style.background = "";

                    button.disabled = false;

                }, 2500);

            }, 1200);

        });

    }


    /*==========================================
    ACTIVE NAVIGATION
    ==========================================*/

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 120;

            if (window.scrollY >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("current");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("current");

            }

        });

    });

});


/*==========================================
DYNAMIC CSS
==========================================*/

const style = document.createElement("style");

style.innerHTML = `

.show{

opacity:1 !important;
transform:translateY(0) !important;

}

.vision-item,
.service-card,
.quick-item,
.about-image,
.about-content,
.contact-info,
.contact-form,
.cta-box{

opacity:0;
transform:translateY(40px);
transition:.8s ease;

}

.current{

color:#ba9653 !important;

}

@media(max-width:768px){

nav ul{

position:absolute;
top:90px;
left:0;
width:100%;
background:#fff;
display:none;
flex-direction:column;
padding:30px 0;
box-shadow:0 15px 35px rgba(0,0,0,.08);

}

nav ul.active{

display:flex;

}

nav ul li{

text-align:center;
padding:12px 0;

}

}

`;

document.head.appendChild(style);
