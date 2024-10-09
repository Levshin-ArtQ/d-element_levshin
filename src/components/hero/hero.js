
export default function initializeHero(heroIllustration) {
  let hero = document.querySelector('.hero');
  hero.style.backgroundImage = `url(${heroIllustration})`;
}