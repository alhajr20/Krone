import slider from '../js/modules/slider';

document.addEventListener('DOMContentLoaded', () => {

    const menuBtn = document.querySelector('.menu-btn');
    const menuNav = document.querySelector('.header__menu');

    menuBtn.addEventListener('click', () => {
        menuBtn.classList.toggle('menu-active');
        menuNav.classList.toggle('menu-active_global');
    });

    document.querySelectorAll('.footer__item h4').forEach(item => {
        item.addEventListener('click', () => {
            const parent = item.parentNode.children[1];
            const arrow = item.parentNode.children[0];

            if (parent.classList.contains('block-active')) {
                parent.classList.remove('block-active');
                arrow.classList.remove('title-active');
            } else {
                document.querySelectorAll('.footer__item ul').forEach(child => child.classList.remove('block-active'));
                parent.classList.add('block-active');
                arrow.classList.add('title-active');
            }
        });
    });

    const slider = document.querySelector('.swiper');

    let mySwiper = new Swiper(slider, {
        slidesPerView: 7,
        spaceBetween: 0,
        loop: true,
        // autoplay: {
        //     delay: 2000,
        // },
        breakpoints: {
            0: {
                slidesPerView: 5,
                spaceBetween: 0,
            },

            769: {
                slidesPerView: 7,
                spaceBetween: 0,
            }
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const sliderSecond = document.querySelector('.carousel-container');

    let mySwiper1 = new Swiper(sliderSecond, {
        slidesPerView: 1,
        spaceBetween: 10,
        loop: true,
        direction: 'horizontal',
        // effect:'fade',

        breakpoints: {
            0: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },

            650: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            1280: {
                slidesPerView: 1,
                spaceBetween: 10,
            },
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const sliderThird = document.querySelector('.swiper-container');

    let mySwiper2 = new Swiper(sliderThird, {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        direction: 'horizontal',

        breakpoints: {
            0: {
                slidesPerView: 1.3,
                spaceBetween: 10,
            },

            500: {
                slidesPerView: 2,
                spaceBetween: 20,
            },

            800: {
                slidesPerView: 3,
                spaceBetween: 30,
            },

            1280: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
        },

        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true
        },
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    const sliderFourth = document.querySelectorAll('.row .swiper-container');

    sliderFourth.forEach(item => {
        let mySwiper3 = new Swiper(item, {
            slidesPerView: 5.5,
            spaceBetween: 0,
            loop: true,
            direction: 'horizontal',
    
            pagination: {
                el: '.swiper-pagination',
                type: 'bullets',
                clickable: true
            },

            breakpoints: {
                300: {
                    slidesPerView: 1.6,
                    spaceBetween: 5,
                },

                500: {
                    slidesPerView: 2.5,
                    spaceBetween: 0,
                },

                992: {
                    slidesPerView: 4,
                    spaceBetween: 0,
                },

                1280: {
                    slidesPerView: 5.5,
                    spaceBetween: 0,
                }
            },
            // autoplay: {
            //     delay: 4000,
            //     disableOnInteraction: false
            // },
    
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    });

    const sliderFiveth = document.querySelector('.promo__mobileMenu .swiper');

    let mySwiper5 = new Swiper(sliderFiveth, {
        slidesPerView: 5,
        spaceBetween: 10,
        loop: true,
        direction: 'horizontal',

        breakpoints: {
            0: {
                slidesPerView: 4,
                spaceBetween: 10,
            },

            400: {
                slidesPerView: 5,
                spaceBetween: 10,
            },
        },
    });

    const headerSection = document.querySelector('.header__items');

    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            headerSection.classList.add('header-fixed');
        } else {
            headerSection.classList.remove('header-fixed');
        };
    });

    // slider();
});