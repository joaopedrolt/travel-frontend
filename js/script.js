const navbar = document.querySelector('.header .navbar');
const header = document.querySelector('.header');

document.getElementById('menu-btn').onclick = () => {
    navbar.classList.add('active');
}

document.getElementById('nav-close').onclick = () => {
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');

    if (window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

window.onload = () => {
    if (window.scrollY > 0) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
}

let searchForm = document.querySelector('.search-form');

document.getElementById('search-btn').onclick = () => {
    searchForm.classList.add('active');
}

document.getElementById('close-search').onclick = () => {
    searchForm.classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});