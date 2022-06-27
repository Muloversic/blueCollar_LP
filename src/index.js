import './styles/reset.css';
import './styles/icon-font.css';
import './styles/main.scss';

const burgerIcon = document.querySelector('.header__burger-icon');
const burgerBody = document.querySelector('.header__burger-menu');
const burgerParent = document.querySelector('.header__socials-wrapper');

burgerIcon.addEventListener('click', () => {
  const shiftWidth = document.querySelector('.header__burger-menu').clientWidth;
  burgerBody.classList.toggle('header__burger-menu--active');
  burgerIcon.classList.toggle('icon-cross');
  document.body.classList.toggle('lock');
  if ([...burgerBody.classList].includes('header__burger-menu--active')) {
    burgerParent.style.left = shiftWidth + 'px';
  } else {
    burgerParent.style.left = 0 + 'px';
  }
});
