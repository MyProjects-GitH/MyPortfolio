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

const loader = document.querySelector('.loader');

if (loader) {
    window.addEventListener('load', () => {
        loader.classList.add('hide');
    });
}

