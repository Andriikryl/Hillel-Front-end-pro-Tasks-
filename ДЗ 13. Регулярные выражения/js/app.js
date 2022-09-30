// Создать форму:
// - имя и фамилия, первая буква большая
// - номер телефона, формат +380671234567
// - email, формат email
// - номер карты, 16 цифр
// Для проверки использовать регулярные выражения
// Прочитать документацию о регулярных выражениях



let basicTimeline = anime.timeline({
  autoplay: false
});

var pathEls = $(".check");
for (var i = 0; i < pathEls.length; i++) {
  var pathEl = pathEls[i];
  var offset = anime.setDashoffset(pathEl);
  pathEl.setAttribute("stroke-dashoffset", offset);
}

basicTimeline
  .add({
    targets: ".text",
    duration: 1,
    opacity: "0"
  })
  .add({
    targets: ".button",
    duration: 1300,
    height: 10,
    width: 300,
    backgroundColor: "#2B2D2F",
    border: "0",
    borderRadius: 100
  })
  .add({
    targets: ".progress-bar",
    duration: 2000,
    width: 300,
    easing: "linear"
  })
  .add({
    targets: ".button",
    width: 0,
    duration: 1
  })
  .add({
    targets: ".progress-bar",
    width: 300,
    height: 472,
    delay: 500,
    duration: 750,
    borderRadius: 80,
    backgroundColor: "#f4e3d1"
  })
  .add({
    targets: pathEl,
    strokeDashoffset: [offset, 0],
    duration: 200,
    easing: "easeInOutSine"
  });

$(".button").click(function() {
  basicTimeline.play();
});

$(".text").click(function() {
  basicTimeline.play();
});

const SUCCESS_CLASSNAME = "success";
const ERROR_CLASSNAME = "error";

function highlightValidationHint(hintEl, isValid) {
  if (isValid) {
    hintEl.classList.add(SUCCESS_CLASSNAME);
    hintEl.classList.remove(ERROR_CLASSNAME);
  } else {
    hintEl.classList.remove(SUCCESS_CLASSNAME);
    hintEl.classList.add(ERROR_CLASSNAME);
  }
}

document.querySelector("[name=name]").addEventListener("input", function () {
  const capitalLetter = /[A-Z][a-z]{1,} [A-Z][a-z]{1,}$/;
  highlightValidationHint(
    document.getElementById("capitalFormat"),
    capitalLetter.test(this.value)
  );
});

document.querySelector("[name=number]").addEventListener("input", function () {
  const capitalLetter = /[+][0-9]{12}$/;
  highlightValidationHint(
    document.getElementById("numberFormat"),
    capitalLetter.test(this.value)
  );
});

document.querySelector("[name=email]").addEventListener("input", function () {
  const capitalLetter =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  highlightValidationHint(
    document.getElementById("emailFormat"),
    capitalLetter.test(this.value)
  );
});

document.querySelector("[name=card]").addEventListener("input", function () {
  const capitalLetter = /[0-9]{16}$/;
  highlightValidationHint(
    document.getElementById("cardFormat"),
    capitalLetter.test(this.value)
  );
});

const form = document.forms["formUserData"];

form.addEventListener("submit", function (event) {
  event.preventDefault();
  if (
    document.getElementById("capitalFormat").classList.contains("success") &&
    document.getElementById("numberFormat").classList.contains("success") &&
    document.getElementById("emailFormat").classList.contains("success") &&
    document.getElementById("cardFormat").classList.contains("success")
  ) {
    return console.log("submitted");
  }
  return console.log("denied");
});



