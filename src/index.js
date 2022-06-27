import './styles/reset.css';
import './styles/icon-font.css';
import './styles/main.scss';

const burgerWrapper = document.querySelector('.header__burger-wrapper');
const burgerIcon = document.querySelector('.header__burger-icon');
const socialHeaderWrapepr = document.querySelector('.header__socials-wrapper');
burgerIcon.addEventListener('click', () => {
  const shiftWidth = document.querySelector('.header__burger-menu').clientWidth;
  burgerWrapper.classList.toggle('header__burger-wrapper--active');
  burgerIcon.classList.toggle('icon-cross');
  document.body.classList.toggle('lock');
  if ([...burgerWrapper.classList].includes('header__burger-wrapper--active')) {
    socialHeaderWrapepr.style.left = shiftWidth + 'px';
  } else {
    socialHeaderWrapepr.style.left = 0 + 'px';
  }
});
