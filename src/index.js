require("./index.scss");
const aIcon = require("./assets/images/a-logo.svg");
import heroIllustration from "./assets/images/hero-illustration.svg";
import initializeNav from "./components/nav/nav.js";
import initializeHero from "./components/hero/hero.js";
import { initializeFooter } from "./components/footer/footer.js";
import burgerIcon from "/src/assets/images/burger-icon.svg";
import Card from "./components/description/card.js";
import PopupForm from "./components/popup/popup.js";

const cardImage1 = require("./assets/images/card-image1.svg");
const cardImage2 = require("./assets/images/card-image2.svg");
const cardImage3 = require("./assets/images/card-image3.svg");

// imageSrc, title, description, link
const cards = [
  {
    imageSrc: cardImage1,
    title: "Bring Technology To Your Comfrotable Home",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    link: "/",
  },
  {
    imageSrc: cardImage2,
    title: "Make Your business To Be Better Famous In Internet",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    link: "/",
  },
  
  {
    imageSrc: cardImage3,
    title: "Build Your Digital Product That Suitable For Your Need",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    link: "/",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // initializeNav(aIcon, burgerIcon);
  // initializeFooter();
  initializeHero(heroIllustration);
  let cardsList = document.querySelector(".cards-list__content");
  const popupForm = new PopupForm();

  // Пример кнопки, которая будет открывать попап
  const openPopupButton = document.querySelector(".hire_section__button");

  // Обработчик для открытия попапа по клику
  openPopupButton.addEventListener("click", () => {
    popupForm.show();
  });

  // Закрытие попапа по клику на фон или крестик (если добавите)
  window.addEventListener("click", (event) => {
    if (event.target === popupForm.shadowRoot) {
      popupForm.hide();
    }
  });
  cards.map((element, index) => {
    let card = new Card(
      element.imageSrc,
      element.title,
      element.description,
      element.link
    );
    let newNode = card.createCardElement();
    newNode.classList.add("cards-list__item-" + index);
    cardsList.appendChild(newNode);
  });
  // window.removeEventListener("DOMContentLoaded", loader);
});
