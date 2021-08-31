function slider() {
    let offset = 0;
    let slideIndex = 1;
    
    const slides = document.querySelectorAll('.promo__item'),
          slider = document.querySelector('.promo'),
          prev = document.querySelector('.promo__prev'),
          next = document.querySelector('.promo__next'),
          slidesWrapper = document.querySelector('.promo__wrapper'),
          slidesField = document.querySelector('.promo__inner'),
          width = window.getComputedStyle(slidesWrapper).width;

    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';

    slidesWrapper.style.overflow = 'hidden';

    slides.forEach(slide => {
        slide.style.width = width;
    });

    slider.style.position = 'relative';

    const dots = document.createElement('ol'),
          arrDots = [];

    dots.classList.add('slider-dots');
    slidesWrapper.append(dots);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 32px;
            height: 2px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #333333;
            background-clip: padding-box;
            opacity: .2;
            transition: opacity .6s ease;
            z-index: 5;
            margin-top: 10px;
        `;
        if (i == 0) {
            dot.style.opacity = 1;
        }
        dots.append(dot);
        arrDots.push(dot);
    }

    next.addEventListener('click', moveSlider);

    function moveSlider() {
        if (offset == +width.slice(0, width.length - 2) * (slides.length - 1)) {
            offset = 0;
        } else {
            offset += +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == slides.length) {
            slideIndex = 1;
        } else {
            slideIndex++;
        }

        arrDots.forEach(dot => dot.style.opacity = '.5');
        arrDots[slideIndex - 1].style.opacity = 1;
    }

    prev.addEventListener('click', function() {
        if (offset == 0) {
            offset = +width.slice(0, width.length - 2) * (slides.length - 1);
        } else {
            offset -= +width.slice(0, width.length - 2);
        }

        slidesField.style.transform = `translateX(-${offset}px)`;

        if (slideIndex == 1) {
            slideIndex = slides.length;
        } else {
            slideIndex--;
        }

        arrDots.forEach(dot => dot.style.opacity = '.5');
        arrDots[slideIndex - 1].style.opacity = 1;
    });

    arrDots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');

            slideIndex = slideTo;
            offset = +width.slice(0, width.length - 2) * (slideTo - 1);

            slidesField.style.transform = `translateX(-${offset}px)`;

            arrDots.forEach(dot => dot.style.opacity = '.5');
            arrDots[slideIndex - 1].style.opacity = 1;
        });
    });

    setInterval(moveSlider, 4000);
}

export default slider;