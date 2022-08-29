// На странице есть две кнопки. При нажатии на первую кнопку пользователь должен ввести в prompt ссылку, при нажатии на вторую – переадресовывается на другой сайт (по ранее введенной ссылке).
// document.location.href = “url_to_go”;


let userLink;
const buttonOne = document.querySelector(".first-btn");
const buttonTwo = document.querySelector(".second-btn");

buttonOne.addEventListener("click", function () {
  userLink = prompt("Enter a Link:");
//   if (userLink) userLink = userLink.replaceAll(' ', ''), toLowerCase();

});

buttonTwo.addEventListener("click", function () {
  document.location.href = userLink;
});

