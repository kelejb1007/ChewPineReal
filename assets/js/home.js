// Smooth scroll cho navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Thêm hiệu ứng khi scroll
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.85)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.75)';
    }
});



let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.slider-dot');

function showSlide(n) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));

    if (n >= slides.length) currentSlide = 0;
    if (n < 0) currentSlide = slides.length - 1;

    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
}

function changeSlide(n) {
    currentSlide += n;
    showSlide(currentSlide);
}

function goToSlide(n) {
    currentSlide = n;
    showSlide(currentSlide);
}

setInterval(() => {
    currentSlide++;
    showSlide(currentSlide);
}, 5000);

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});





// Banner Slider
let currentBannerSlide = 0;
const bannerSlides = document.querySelectorAll('.banner-slide');
const bannerDots = document.querySelectorAll('.banner-dot');

function showBannerSlide(n) {
    bannerSlides.forEach(s => s.classList.remove('active'));
    bannerDots.forEach(d => d.classList.remove('active'));

    if (n >= bannerSlides.length) currentBannerSlide = 0;
    if (n < 0) currentBannerSlide = bannerSlides.length - 1;

    bannerSlides[currentBannerSlide].classList.add('active');
    bannerDots[currentBannerSlide].classList.add('active');
}

function changeBannerSlide(n) {
    currentBannerSlide += n;
    showBannerSlide(currentBannerSlide);
}

function goToBannerSlide(n) {
    currentBannerSlide = n;
    showBannerSlide(currentBannerSlide);
}

// Auto slide every 5 seconds
setInterval(() => {
    currentBannerSlide++;
    showBannerSlide(currentBannerSlide);
}, 5000);

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Header scroll effect
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.background = 'rgba(255, 255, 255, 0.85)';
    } else {
        header.style.background = 'rgba(255, 255, 255, 0.75)';
    }
});