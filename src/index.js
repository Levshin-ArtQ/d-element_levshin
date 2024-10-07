import './index.scss';
import aIcon from './assets/images/a-logo.svg';
import heroIllustration from './assets/images/hero-illustration.svg';
import { initializeNav } from './components/nav/nav.js';
import { initializeFooter } from './components/footer/footer.js';
import burgerIcon from '/src/assets/images/burger-icon.svg';
import Card from './components/description/card.js';

import cardImage1 from './assets/images/card-image1.svg';
import cardImage2 from './assets/images/card-image2.svg';
import cardImage3 from './assets/images/card-image3.svg';


// imageSrc, title, description, link
const cards = [
  {'imageSrc': cardImage1, 'title' : 'Bring Technology To Your Comfrotable Home', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'link': '/'},
  {'imageSrc': cardImage2, 'title' : 'Make Your business To Be Better Famous In Internet', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'link': '/'},
  {'imageSrc': cardImage3, 'title' : 'Build Your Digital Product That Suitable For Your Need', 'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ', 'link': '/'},
]

document.addEventListener('DOMContentLoaded', () => {
  
  initializeNav(aIcon, burgerIcon);
  initializeFooter();
  let cardsList = document.querySelector('.cards-list');
  
  cards.map((element, index) => {
    let card = new Card(element.imageSrc, element.title, element.description, element.link)
    let newNode = card.createCardElement()
    newNode.classList.add('cards-list__item'+index);
    cardsList.appendChild(newNode)
  });
  window.removeEventListener("DOMContentLoaded", loader);
}, {once: true})


