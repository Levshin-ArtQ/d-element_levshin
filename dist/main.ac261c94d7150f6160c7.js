/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/description/card.js":
/*!********************************************!*\
  !*** ./src/components/description/card.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Card)\n/* harmony export */ });\n/* harmony import */ var _card_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card.scss */ \"./src/components/description/card.scss\");\n/* harmony import */ var _assets_images_ic_arrow_forward_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/ic_arrow_forward.svg */ \"./src/assets/images/ic_arrow_forward.svg\");\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n//import icArrowForward from './assets/images/ic-arrow-forward.svg';\n\n\nvar Card = /*#__PURE__*/function () {\n  function Card(imageSrc, title, description, link) {\n    _classCallCheck(this, Card);\n    this.imageSrc = imageSrc;\n    this.title = title;\n    this.description = description;\n    this.link = link;\n  }\n  return _createClass(Card, [{\n    key: \"createCardElement\",\n    value: function createCardElement() {\n      // Создание элементов карточки\n      var card = document.createElement('article');\n      card.classList.add('cards-list__item');\n\n      // Контейнер для картинки\n      var cardImageContainer = document.createElement('div');\n      cardImageContainer.classList.add('card__image-container');\n      // Картинка\n      var image = document.createElement('img');\n      image.classList.add('card__image');\n      image.src = this.imageSrc;\n      image.alt = \"Image of \".concat(this.title);\n      cardImageContainer.appendChild(image);\n      var title = document.createElement('h2');\n      title.classList.add('card__title_smaller');\n      title.textContent = this.title;\n      var description = document.createElement('p');\n      description.classList.add('card__description');\n      description.textContent = this.description;\n      var arrowIcon = document.createElement('img');\n      arrowIcon.classList.add('card__arrow-icon');\n      arrowIcon.src = _assets_images_ic_arrow_forward_svg__WEBPACK_IMPORTED_MODULE_1__;\n      var link = document.createElement('a');\n      link.classList.add('card__link');\n      link.href = this.link;\n      link.textContent = 'Learn more';\n      link.appendChild(arrowIcon);\n\n      // Собираем карточку\n      card.appendChild(cardImageContainer);\n      card.appendChild(title);\n      card.appendChild(description);\n      card.appendChild(link);\n      return card;\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://d-element_levshin/./src/components/description/card.js?");

/***/ }),

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeFooter: () => (/* binding */ initializeFooter)\n/* harmony export */ });\n/* harmony import */ var _footer_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.scss */ \"./src/components/footer/footer.scss\");\n\nvar sampleClients = ['LOGO CLIENT 1', 'LOGO CLIENT 2', 'LOGO CLIENT 3', 'LOGO CLIENT 4', 'LOGO CLIENT 5', 'LOGO CLIENT 6', 'LOGO CLIENT 7', 'More Client'];\nfunction initializeFooter() {\n  var footer = document.querySelector('.footer');\n  var clientTable = document.querySelector('.client-section__table');\n  console.log(footer, clientTable);\n  sampleClients.map(function (element, index) {\n    var newNode = document.createElement('div');\n    newNode.classList.add('client-table__item');\n    newNode.textContent = element;\n    clientTable.appendChild(newNode);\n  });\n}\n\n//# sourceURL=webpack://d-element_levshin/./src/components/footer/footer.js?");

/***/ }),

/***/ "./src/components/hero/hero.js":
/*!*************************************!*\
  !*** ./src/components/hero/hero.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initializeHero)\n/* harmony export */ });\nfunction initializeHero(heroIllustration) {\n  var hero = document.querySelector('.hero');\n  hero.style.backgroundImage = \"url(\".concat(heroIllustration, \")\");\n}\n\n//# sourceURL=webpack://d-element_levshin/./src/components/hero/hero.js?");

/***/ }),

/***/ "./src/components/nav/nav.js":
/*!***********************************!*\
  !*** ./src/components/nav/nav.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_images_a_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../assets/images/a-logo.svg */ \"./src/assets/images/a-logo.svg\");\n/* harmony import */ var _assets_images_burger_icon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/images/burger-icon.svg */ \"./src/assets/images/burger-icon.svg\");\n/* harmony import */ var _assets_images_plus_cross_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/images/plus-cross.svg */ \"./src/assets/images/plus-cross.svg\");\n\n\n\n// import './nav.scss';\n// export default function initializeNav(aIcon, burger) {\n//   const logo = document.querySelector('.icon-container__logo');\nvar burgerButton = document.querySelector('.icon-container__burger');\n//   console.log(logo, burgerButton);\n//   if (!logo || !burgerButton) {\n//     throw new Error('Unable to find required elements');\n//   }\n\nvar navList = document.querySelector('.navigation__list');\nvar navListHiddenClass = 'navigation__list_hidden';\nvar navListVisibleClass = 'navigation__list_visible';\nvar isMenuOpen = false;\nfunction toggleMenu() {\n  if (!isMenuOpen) {\n    navList.classList.remove(navListHiddenClass);\n    navList.classList.add(navListVisibleClass);\n    burgerButton.classList.add('icon-container__burger_cross');\n    burgerButton.style.transition = 'transform 0.5s ease-in-out';\n    burgerButton.style.transform = 'rotate(45deg)';\n    burgerButton.src = _assets_images_plus_cross_svg__WEBPACK_IMPORTED_MODULE_2__;\n  } else {\n    navList.classList.add(navListHiddenClass);\n    navList.classList.remove(navListVisibleClass);\n    burgerButton.style.transition = 'transform 0.5s ease-in-out';\n    burgerButton.style.transform = 'rotate(0deg)';\n    burgerButton.classList.remove('icon-container__burger_cross');\n    burgerButton.src = _assets_images_burger_icon_svg__WEBPACK_IMPORTED_MODULE_1__;\n  }\n  isMenuOpen = !isMenuOpen;\n}\nburgerButton.addEventListener('click', toggleMenu);\n\n//   // logo.src = aIcon;\n//   burgerButton.src = burger;\n// }\n\n//# sourceURL=webpack://d-element_levshin/./src/components/nav/nav.js?");

/***/ }),

/***/ "./src/components/popup/popup.js":
/*!***************************************!*\
  !*** ./src/components/popup/popup.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PopupForm)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// import './popup.scss';\nvar PopupForm = /*#__PURE__*/function () {\n  function PopupForm() {\n    _classCallCheck(this, PopupForm);\n    this.shadowRoot = document.createElement('div');\n    this.shadowRoot.classList.add('shadow');\n    // Создаем контейнер для попапа\n    this.popup = document.createElement('div');\n    this.popup.classList.add('popup-form');\n\n    // Форма\n    this.form = document.createElement('form');\n    this.form.classList.add('popup-form__form');\n\n    // Поле ввода имени\n    this.firstNameLabel = document.createElement('label');\n    this.firstNameLabel.textContent = 'First Name';\n    this.firstNameInput = document.createElement('input');\n    this.firstNameInput.type = 'text';\n    this.firstNameInput.placeholder = 'First Name';\n    this.firstNameInput.name = 'firstName';\n    this.firstNameInput.classList.add('popup-form__input');\n\n    // Поле ввода email\n    this.emailLabel = document.createElement('label');\n    this.emailLabel.textContent = 'Email';\n    this.emailInput = document.createElement('input');\n    this.emailInput.type = 'email';\n    this.emailInput.placeholder = 'Email';\n    this.emailInput.name = 'email';\n    this.emailInput.classList.add('popup-form__input');\n\n    // Поле для сообщения\n    this.messageLabel = document.createElement('label');\n    this.messageLabel.textContent = 'Your message';\n    this.messageTextarea = document.createElement('textarea');\n    this.messageTextarea.placeholder = 'Your message';\n    this.messageTextarea.name = 'message';\n    this.messageTextarea.classList.add('popup-form__textarea');\n\n    // Кнопка отправки\n    this.submitButton = document.createElement('button');\n    this.submitButton.type = 'submit';\n    this.submitButton.textContent = 'Submit';\n    this.submitButton.classList.add('popup-form__submit');\n    this.shadowRoot.appendChild(this.popup);\n    // Добавляем элементы в форму\n    this.form.appendChild(this.firstNameLabel);\n    this.form.appendChild(this.firstNameInput);\n    this.form.appendChild(this.emailLabel);\n    this.form.appendChild(this.emailInput);\n    this.form.appendChild(this.messageLabel);\n    this.form.appendChild(this.messageTextarea);\n    this.form.appendChild(this.submitButton);\n\n    // Добавляем форму в попап\n    this.popup.appendChild(this.form);\n\n    // Обработчик отправки формы\n    this.form.addEventListener('submit', this.handleSubmit.bind(this));\n\n    // Попап по умолчанию скрыт\n    this.hide();\n\n    // Добавляем попап в body\n    document.body.appendChild(this.shadowRoot);\n  }\n\n  // Метод для показа попапа\n  return _createClass(PopupForm, [{\n    key: \"show\",\n    value: function show() {\n      this.shadowRoot.style.display = 'block';\n      document.body.classList.add('no-scroll'); // Отключаем прокрутку страницы\n    }\n\n    // Метод для скрытия попапа\n  }, {\n    key: \"hide\",\n    value: function hide() {\n      this.shadowRoot.style.display = 'none';\n      document.body.classList.remove('no-scroll');\n    }\n\n    // Метод для валидации данных формы\n  }, {\n    key: \"validateForm\",\n    value: function validateForm() {\n      var name = this.firstNameInput.value.trim();\n      var email = this.emailInput.value.trim();\n      var message = this.messageTextarea.value.trim();\n      if (!name || !email || !message) {\n        alert('Please fill in all fields.');\n        return false;\n      }\n\n      // Простейшая проверка email\n      var emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n      if (!emailPattern.test(email)) {\n        alert('Please enter a valid email address.');\n        return false;\n      }\n      return true;\n    }\n\n    // Метод для обработки отправки формы\n  }, {\n    key: \"handleSubmit\",\n    value: function handleSubmit(event) {\n      event.preventDefault(); // Отключаем стандартное поведение формы\n\n      // Валидация формы\n      if (this.validateForm()) {\n        alert('Your message successfully sent!');\n        this.hide(); // Закрываем попап после отправки\n        // В этом месте вы можете реализовать отправку данных на сервер.\n      }\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://d-element_levshin/./src/components/popup/popup.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_images_hero_illustration_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/hero-illustration.svg */ \"./src/assets/images/hero-illustration.svg\");\n/* harmony import */ var _components_nav_nav_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/nav/nav.js */ \"./src/components/nav/nav.js\");\n/* harmony import */ var _components_hero_hero_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/hero/hero.js */ \"./src/components/hero/hero.js\");\n/* harmony import */ var _components_footer_footer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/footer/footer.js */ \"./src/components/footer/footer.js\");\n/* harmony import */ var _src_assets_images_burger_icon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../src/assets/images/burger-icon.svg */ \"./src/assets/images/burger-icon.svg\");\n/* harmony import */ var _components_description_card_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/description/card.js */ \"./src/components/description/card.js\");\n/* harmony import */ var _components_popup_popup_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/popup/popup.js */ \"./src/components/popup/popup.js\");\n__webpack_require__(/*! ./index.scss */ \"./src/index.scss\");\nvar aIcon = __webpack_require__(/*! ./assets/images/a-logo.svg */ \"./src/assets/images/a-logo.svg\");\n\n\n\n\n\n\n\nvar cardImage1 = __webpack_require__(/*! ./assets/images/card-image1.svg */ \"./src/assets/images/card-image1.svg\");\nvar cardImage2 = __webpack_require__(/*! ./assets/images/card-image2.svg */ \"./src/assets/images/card-image2.svg\");\nvar cardImage3 = __webpack_require__(/*! ./assets/images/card-image3.svg */ \"./src/assets/images/card-image3.svg\");\n\n// imageSrc, title, description, link\nvar cards = [{\n  imageSrc: cardImage1,\n  title: \"Bring Technology To Your Comfrotable Home\",\n  description: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \",\n  link: \"/\"\n}, {\n  imageSrc: cardImage2,\n  title: \"Make Your business To Be Better Famous In Internet\",\n  description: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \",\n  link: \"/\"\n}, {\n  imageSrc: cardImage3,\n  title: \"Build Your Digital Product That Suitable For Your Need\",\n  description: \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \",\n  link: \"/\"\n}];\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  // initializeNav(aIcon, burgerIcon);\n  // initializeFooter();\n  (0,_components_hero_hero_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_assets_images_hero_illustration_svg__WEBPACK_IMPORTED_MODULE_0__);\n  var cardsList = document.querySelector(\".cards-list__content\");\n  var popupForm = new _components_popup_popup_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]();\n\n  // Пример кнопки, которая будет открывать попап\n  var openPopupButton = document.querySelector(\".hire_section__button\");\n\n  // Обработчик для открытия попапа по клику\n  openPopupButton.addEventListener(\"click\", function () {\n    popupForm.show();\n  });\n\n  // Закрытие попапа по клику на фон или крестик (если добавите)\n  window.addEventListener(\"click\", function (event) {\n    if (event.target === popupForm.shadowRoot) {\n      popupForm.hide();\n    }\n  });\n  cards.map(function (element, index) {\n    var card = new _components_description_card_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"](element.imageSrc, element.title, element.description, element.link);\n    var newNode = card.createCardElement();\n    newNode.classList.add(\"cards-list__item-\" + index);\n    cardsList.appendChild(newNode);\n  });\n  // window.removeEventListener(\"DOMContentLoaded\", loader);\n});\n\n//# sourceURL=webpack://d-element_levshin/./src/index.js?");

/***/ }),

/***/ "./src/components/description/card.scss":
/*!**********************************************!*\
  !*** ./src/components/description/card.scss ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://d-element_levshin/./src/components/description/card.scss?");

/***/ }),

/***/ "./src/components/footer/footer.scss":
/*!*******************************************!*\
  !*** ./src/components/footer/footer.scss ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://d-element_levshin/./src/components/footer/footer.scss?");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://d-element_levshin/./src/index.scss?");

/***/ }),

/***/ "./src/assets/images/a-logo.svg":
/*!**************************************!*\
  !*** ./src/assets/images/a-logo.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/a-logo.svg\";\n\n//# sourceURL=webpack://d-element_levshin/./src/assets/images/a-logo.svg?");

/***/ }),

/***/ "./src/assets/images/burger-icon.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/burger-icon.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/burger-icon.svg\";\n\n//# sourceURL=webpack://d-element_levshin/./src/assets/images/burger-icon.svg?");

/***/ }),

/***/ "./src/assets/images/card-image1.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/card-image1.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/card-image1.svg\";\n\n//# sourceURL=webpack://d-element_levshin/./src/assets/images/card-image1.svg?");

/***/ }),

/***/ "./src/assets/images/card-image2.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/card-image2.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/card-image2.svg\";\n\n//# sourceURL=webpack://d-element_levshin/./src/assets/images/card-image2.svg?");

/***/ }),

/***/ "./src/assets/images/card-image3.svg":
/*!*******************************************!*\
  !*** ./src/assets/images/card-image3.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/card-image3.svg\";\n\n//# sourceURL=webpack://d-element_levshin/./src/assets/images/card-image3.svg?");

/***/ }),

/***/ "./src/assets/images/hero-illustration.svg":
/*!*************************************************!*\
  !*** ./src/assets/images/hero-illustration.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/hero-illustration.svg\";\n\n//# sourceURL=webpack://d-element_levshin/./src/assets/images/hero-illustration.svg?");

/***/ }),

/***/ "./src/assets/images/ic_arrow_forward.svg":
/*!************************************************!*\
  !*** ./src/assets/images/ic_arrow_forward.svg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/ic_arrow_forward.svg\";\n\n//# sourceURL=webpack://d-element_levshin/./src/assets/images/ic_arrow_forward.svg?");

/***/ }),

/***/ "./src/assets/images/plus-cross.svg":
/*!******************************************!*\
  !*** ./src/assets/images/plus-cross.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"images/plus-cross.svg\";\n\n//# sourceURL=webpack://d-element_levshin/./src/assets/images/plus-cross.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;