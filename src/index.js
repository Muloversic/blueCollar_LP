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

// service buttons&elements
const disableElement = (selector, className) => [...selector].forEach((element) => element.classList.remove(className));

const buttonsContainer = document.querySelector('.service__buttons-row');
buttonsContainer.addEventListener('click', (e) => {
  const allServiceInfoBlocks = document.querySelectorAll('.service__info-block');
  const allServiceButtons = document.querySelectorAll('.service__button');

  if ([...e.target.classList].includes('service__button')) {
    disableElement(allServiceInfoBlocks, 'service__info-block--active');
    disableElement(allServiceButtons, 'service__button--active');
    const button = e.target;
    const dataBlockToShow = button.getAttribute('data-target');
    const activeBlock = document.querySelector(`#${dataBlockToShow}`);
    activeBlock.classList.add('service__info-block--active');
    button.classList.add('service__button--active');
  }
});
