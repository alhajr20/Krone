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

    const headerSection = document.querySelector('.header');

    console.log(headerSection);

    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            headerSection.classList.add('header-fixed');
        } else {
            headerSection.classList.remove('header-fixed');
        };
    });

    slider();
});