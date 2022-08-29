// Есть блок с текстом на странице и кнопку. При нажатии на кнопку текст изменяет цвет. При повторном нажатии – возвращается предыдущий цвет


const newText = document.querySelector(".card-text");
const styleButt = document.querySelector(".card-btn");

styleButt.addEventListener("click", function () {
  newText.classList.toggle("text-color");
});