import './hero.scss';

export default function initializeHero(heroIllustration) {
  let hero = document.querySelector('.hero__content');
  hero.style.backgroundImage = `url(${heroIllustration})`;
}