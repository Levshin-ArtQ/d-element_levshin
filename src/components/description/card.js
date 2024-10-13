//import icArrowForward from './assets/images/ic-arrow-forward.svg';
import './card.scss';
import arrowImage from '../../assets/images/ic_arrow_forward.svg'

export default class Card {
  constructor(imageSrc, title, description, link) {
    this.imageSrc = imageSrc;
    this.title = title;
    this.description = description;
    this.link = link;
    
  }

  createCardElement() {
    // Создание элементов карточки
    const card = document.createElement('article');
    card.classList.add('cards-list__item');
    
    // Контейнер для картинки
    const cardImageContainer = document.createElement('div');
    cardImageContainer.classList.add('card__image-container');
    // Картинка
    const image = document.createElement('img');
    image.classList.add('card__image');
    image.src = this.imageSrc;
    image.alt = `Image of ${this.title}`;
    cardImageContainer.appendChild(image);

    const title = document.createElement('h2');
    title.classList.add('card__title_smaller');
    title.textContent = this.title;

    const description = document.createElement('p');
    description.classList.add('card__description');
    description.textContent = this.description;

    const arrowIcon = document.createElement('img');
    arrowIcon.classList.add('card__arrow-icon');
    arrowIcon.src = arrowImage;
    const link = document.createElement('a');
    link.classList.add('card__link');
    link.href = this.link;
    link.textContent = 'Learn more';
    link.appendChild(arrowIcon);

    // Собираем карточку
    card.appendChild(cardImageContainer);
    card.appendChild(title);
    card.appendChild(description);
    card.appendChild(link);

    return card;
  }
}