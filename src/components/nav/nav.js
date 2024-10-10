import aIcon from '../../assets/images/a-logo.svg';
import burger from '../../assets/images/burger-icon.svg';
import plus from '../../assets/images/plus-cross.svg';
// import './nav.scss';
// export default function initializeNav(aIcon, burger) {
//   const logo = document.querySelector('.icon-container__logo');
  const burgerButton = document.querySelector('.icon-container__burger');
//   console.log(logo, burgerButton);
//   if (!logo || !burgerButton) {
//     throw new Error('Unable to find required elements');
//   }

  const navList = document.querySelector('.navigation__list');
  const navListHiddenClass = 'navigation__list_hidden';
  const navListVisibleClass = 'navigation__list_visible';
  let isMenuOpen = false;

  function toggleMenu() {
    if (!isMenuOpen) {
      navList.classList.remove(navListHiddenClass);
      navList.classList.add(navListVisibleClass);
      burgerButton.classList.add('icon-container__burger_cross');
      burgerButton.style.transition = 'transform 0.5s ease-in-out';
      burgerButton.style.transform = 'rotate(45deg)';
      burgerButton.src = plus;
    } else {
      navList.classList.add(navListHiddenClass);
      navList.classList.remove(navListVisibleClass);
      burgerButton.style.transition = 'transform 0.5s ease-in-out';
      burgerButton.style.transform = 'rotate(0deg)';

      burgerButton.classList.remove('icon-container__burger_cross');
      burgerButton.src = burger;

    }
    isMenuOpen = !isMenuOpen;
  }

  burgerButton.addEventListener('click', toggleMenu);

//   // logo.src = aIcon;
//   burgerButton.src = burger;
// }
