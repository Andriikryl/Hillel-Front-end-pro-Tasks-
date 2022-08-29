{


const buttonOne = document.querySelector(".get-image");

buttonOne.addEventListener("click", function () {
  const i = Math.floor(Math.random() * 9 + 1);
  document.querySelectorAll("img").forEach((img) => img.remove());
  document
    .querySelector(".box-img")
    .insertAdjacentHTML(
      "beforeend",
      `<img src="./images/${i}.jpg" alt="img ${i}" id=img${i}>`
    );
});

}