// Используя API https://jsonplaceholder.typicode.com/  сделать поиск поста по ID.

// ID должен быть введен в input (валидация: ID от 1 до 100)

// Если найден пост, то вывести на страницу и вывести комментарии к посту.

// Сделать задачу используя async/await, обрабатывать ошибки с помощью try/catch.


const form = document.forms.form;
const idInput = form.input;
const container = document.querySelector('.container');
const ERROR_CLASS = '_error';
const CONTENT_CLASS = 'content';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  removeError(ERROR_CLASS);
  getPostComments();
});

async function getPostComments() {
  if (idInput.value <= 0 || idInput.value > 100) {
    addError(idInput, 'ID must be from 1 to 99');
    return;
  }
  removeContent(CONTENT_CLASS);
  try {
    const URL = `https://jsonplaceholder.typicode.com/posts/${idInput.value}`;
    const responsePost = await fetch(URL);
    const dataPost = await responsePost.json();
    renderPost(container, dataPost);

    const responseComments = await fetch(`${URL}/comments`);
    const dataComments = await responseComments.json();
    renderComments(document.querySelector(`.${CONTENT_CLASS}`), dataComments);
  } catch (error) {
    console.log(error);
  }
}

function renderPost(DOMContainer, json) {
    DOMContainer.insertAdjacentHTML(
      'beforeend',
      `
        <div class=${CONTENT_CLASS}>
          <h2 class="post-title">${json.title}</h2>
          <p class="post">${json.body}</p>
          <h3 class="comments-title">Comments:</h3>
        </div>`
    );
  }
  
  function renderComments(containerWithPost, json) {
    json.forEach((item) => {
      containerWithPost.insertAdjacentHTML(
        'beforeend',
        `
          <p class="user-email">${item.email} <span>wrote:</span></p>
          <p>${item.body}</p>`
      );
    });
  }
  
  function removeContent(contentClass) {
    const content = document.querySelectorAll(`.${contentClass}`);
    content.forEach((item) => item.remove());
  }
  
  function addError(element, errorMessage) {
    const message = document.createElement('p');
    message.textContent = errorMessage;
    message.classList.add(ERROR_CLASS);
    element.after(message);
  }
  
  function removeError(errorClass) {
    const errors = document.querySelectorAll(`.${errorClass}`);
    errors.forEach((item) => item.remove());
  }