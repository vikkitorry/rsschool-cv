//Header (burger)
const headerBurger = document.querySelector('.burger');
const headerNav = document.querySelector('.header__nav-list');
const overlay = document.querySelector('.overlay');

headerBurger.addEventListener('click', () => {
    headerNav.classList.toggle('header__nav-active');
    overlay.classList.toggle('overlay_active');
});
overlay.addEventListener('click', () => {
    headerNav.classList.remove('header__nav-active');
    overlay.classList.remove('overlay_active');
    easterEggs.classList.remove('easter-eggs-active');
});
//Easter Eggs =)
const heart = document.querySelector('.heart');
const easterEggs = document.querySelector('.easter-eggs');

heart.addEventListener('click', () => {
    easterEggs.classList.toggle('easter-eggs-active');
    overlay.classList.toggle('overlay_active');
});
