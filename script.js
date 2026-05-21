// Script for handling the hamburger menu toggle and closing it when clicking outside
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const overlay = document.querySelector('.overlay');

const closeMobileMenu = () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
    overlay.classList.remove('active');
    document.body.classList.remove('no-scroll');
    document.documentElement.classList.remove('no-scroll');
};

hamburger.addEventListener('click', (e) => {
    e.stopPropagation();

    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
    document.documentElement.classList.toggle('no-scroll');
});

navMenu.addEventListener('click', (e) => {
    e.stopPropagation();
});

document.addEventListener('click', closeMobileMenu);

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', closeMobileMenu);
});

overlay.addEventListener('click', closeMobileMenu);

// Script for handling the fade-up animation on scroll using Intersection Observer API
const faders = document.querySelectorAll('.fade-up');

const appearOptions = {
    threshold: 0.1
};

const appearOnScroll = new IntersectionObserver(function (entries, observer) {
    entries.forEach((entry, index) => {
        if (!entry.isIntersecting) return;
        setTimeout(() => {
            entry.target.classList.add('show');
        }, index * 100);

        observer.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

window.addEventListener("load", () => {
    document.querySelector(".loader").classList.add("hide");
});

const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {

        tabButtons.forEach(btn => {
            btn.classList.remove('active');
        });

        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        button.classList.add('active');

        const target = button.getAttribute('data-tab');

        document.getElementById(target)
            .classList.add('active');
    });
});

