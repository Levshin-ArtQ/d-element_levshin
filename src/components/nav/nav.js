import './nav.scss';
export default function initializeNav(aIcon, burger) {
  const logo = document.querySelector('.icon-container__logo');
  const burgerButton = document.querySelector('.icon-container__burger');
  console.log(logo, burgerButton);
  if (!logo || !burgerButton) {
    throw new Error('Unable to find required elements');
  }



  logo.src = aIcon;
  burgerButton.src = burger;
}
