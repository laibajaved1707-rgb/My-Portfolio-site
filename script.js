
/* ===========================
PRELOADER
=========================== */

window.addEventListener("load", () => {

    const loader = document.getElementById("preloader");

    loader.style.display = "none";

});


/* ===========================
STICKY HEADER
=========================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    header.classList.toggle("sticky", window.scrollY > 50);

});


/* ===========================
SCROLL TO TOP
=========================== */

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ===========================
MOBILE MENU
=========================== */

const menuBtn = document.getElementById("menu-btn");

const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});


/* ===========================
DARK MODE
=========================== */

const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeBtn.classList.remove("fa-moon");

        themeBtn.classList.add("fa-sun");

    } else {

        themeBtn.classList.remove("fa-sun");

        themeBtn.classList.add("fa-moon");

    }

});


/* ===========================
TYPING EFFECT
=========================== */

const typing = document.querySelector(".typing");

const words = [

    "WordPress Developer",

    "Elementor Expert",

    "WooCommerce Specialist",

    "Freelancer"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    } else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();
/* ===========================
ACTIVE NAVIGATION
=========================== */

const sections = document.querySelectorAll("section");
const navItems = document.querySelectorAll("#navLinks a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
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


/* ===========================
SMOOTH CLOSE MOBILE MENU
=========================== */

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

    });

});


/* ===========================
SIMPLE FADE-IN ANIMATION
=========================== */

const cards = document.querySelectorAll(
".skill-card, .service-card, .project-card, .timeline-item, .info-box"
);

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.style.opacity="1";
            entry.target.style.transform="translateY(0)";

        }

    });

},{
    threshold:0.15
});

cards.forEach(card=>{

    card.style.opacity="0";
    card.style.transform="translateY(40px)";
    card.style.transition="all .6s ease";

    observer.observe(card);

});


/* ===========================
CONTACT FORM
=========================== */

const form = document.querySelector(".contact-form");

if(form){

form.addEventListener("submit",(e)=>{

e.preventDefault();

alert("Thank you! Your message has been received.");

form.reset();

});

}
