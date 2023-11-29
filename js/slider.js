

const sliderElm = document.querySelector('.splide');
const SLIDE_SPEED = 400;
const slider = new Splide(sliderElm, {
    type: 'fade',
    rewind: true,
    rewindByDrag: true,
    type: 'loop',
    perPage: 2,
    perMove: 1,
    speed: SLIDE_SPEED,
    gap: '2rem',
    padding: '2rem',
    autoplay: true,
    interval: 6000,
    pauseOnHover: true,
    pauseOnFocus: true,
    keyboard: 'global',

    breakpoints: {
        767: {
            perPage: 1,
            gap: '0rem',
            padding: '0rem',
        },
    },
}).mount();