// import './popup.scss';
export default class PopupForm {
  constructor() {
    this.shadowRoot = document.createElement('div');
    this.shadowRoot.classList.add('shadow');
    // Создаем контейнер для попапа
    this.popup = document.createElement('div');
    this.popup.classList.add('popup-form');
    
    // Форма
    this.form = document.createElement('form');
    this.form.classList.add('popup-form__form');

    // Поле ввода имени
    this.firstNameLabel = document.createElement('label');
    this.firstNameLabel.textContent = 'First Name';
    this.firstNameInput = document.createElement('input');
    this.firstNameInput.type = 'text';
    this.firstNameInput.placeholder = 'First Name';
    this.firstNameInput.name = 'firstName';
    this.firstNameInput.classList.add('popup-form__input');

    // Поле ввода email
    this.emailLabel = document.createElement('label');
    this.emailLabel.textContent = 'Email';
    this.emailInput = document.createElement('input');
    this.emailInput.type = 'email';
    this.emailInput.placeholder = 'Email';
    this.emailInput.name = 'email';
    this.emailInput.classList.add('popup-form__input');

    // Поле для сообщения
    this.messageLabel = document.createElement('label');
    this.messageLabel.textContent = 'Your message';
    this.messageTextarea = document.createElement('textarea');
    this.messageTextarea.placeholder = 'Your message';
    this.messageTextarea.name = 'message';
    this.messageTextarea.classList.add('popup-form__textarea');

    // Кнопка отправки
    this.submitButton = document.createElement('button');
    this.submitButton.type = 'submit';
    this.submitButton.textContent = 'Submit';
    this.submitButton.classList.add('popup-form__submit');

    this.shadowRoot.appendChild(this.popup);
    // Добавляем элементы в форму
    this.form.appendChild(this.firstNameLabel);
    this.form.appendChild(this.firstNameInput);
    this.form.appendChild(this.emailLabel);
    this.form.appendChild(this.emailInput);
    this.form.appendChild(this.messageLabel);
    this.form.appendChild(this.messageTextarea);
    this.form.appendChild(this.submitButton);

    // Добавляем форму в попап
    this.popup.appendChild(this.form);

    // Обработчик отправки формы
    this.form.addEventListener('submit', this.handleSubmit.bind(this));

    // Попап по умолчанию скрыт
    this.hide();
    
    // Добавляем попап в body
    document.body.appendChild(this.shadowRoot);
  }

  // Метод для показа попапа
  show() {
    this.shadowRoot.style.display = 'block';
    document.body.classList.add('no-scroll'); // Отключаем прокрутку страницы
  }

  // Метод для скрытия попапа
  hide() {
    this.shadowRoot.style.display = 'none';
    document.body.classList.remove('no-scroll');
  }

  // Метод для валидации данных формы
  validateForm() {
    const name = this.firstNameInput.value.trim();
    const email = this.emailInput.value.trim();
    const message = this.messageTextarea.value.trim();

    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return false;
    }
    
    // Простейшая проверка email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    return true;
  }

  // Метод для обработки отправки формы
  handleSubmit(event) {
    event.preventDefault(); // Отключаем стандартное поведение формы

    // Валидация формы
    if (this.validateForm()) {
      alert('Your message successfully sent!');
      this.hide(); // Закрываем попап после отправки
      // В этом месте вы можете реализовать отправку данных на сервер.
    }
  }
}

