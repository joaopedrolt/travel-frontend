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

var swiperHome = new Swiper(".home-slider", {
    loop: true,
    grabCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var swiperShop = new Swiper(".product-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        581: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        },
        1200: {
            slidesPerView: 4
        },
    }
});

var swiperReviews = new Swiper(".reviews-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        581: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3
        }
    }
});

var swiperBlogs = new Swiper(".blogs-slider", {
    loop: true,
    grabCursor: true,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        991: {
            slidesPerView: 3
        }
    }
});




