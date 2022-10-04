// Берем за основу слайдер из предыдущих домашек.
// Слайдер автоматически переключает картинки.
// Доходя до последнего слайдер останавливается.
// Добавить точки под слайдером (если их не было раньше), которые дают возможность переключаться между слайдами и показывают текущий.

// Не обязательное задание: реализовать форму с одним полем, поле принимает дату (type="date"). После ввода даты выводиться таймер (года, месяцы, дни, часы, минуты, секунды) до наступления введенной даты. Валидация не дает ввести дату >= сегодня.









let tl = new TimelineMax();


tl.fromTo('.first', 1, {x:-1000,opacity:0}, {x:250,opacity: 1})

tl.fromTo('.second', 1, {y:-1000,opacity:0}, {y:0,opacity: 1}, "-=0.2")

tl.fromTo('.three', 4, {opacity:0}, {opacity: 1}, "-=0.3")

tl.fromTo('.four', 1.3, {y:-1000,opacity:0}, {y:0,opacity: 1}, "-=3.4")





const images = [
  './img/01.jpg',
  './img/02.jpg',
  './img/03.jpg',
  './img/04.jpg',
  './img/05.jpg',
  './img/06.jpg',
  './img/07.jpg',
  './img/08.jpg',
  './img/09.jpg',
  './img/10.jpg',
];

const buttonContainer = document.querySelector('.slider__button-container');
const progressBar = document.querySelector('.slider__progressbar');
let number = 0;

for (let i = 0; i < images.length; i++) {
  const progressPoint = document.createElement('span');
  progressPoint.setAttribute('data-id', [i]);
  progressBar.append(progressPoint);
}
const pointsArray = document.querySelectorAll('.slider__progressbar span');
pointsArray[0].classList.add('_active');

function changeProgressbar() {
  pointsArray.forEach(function (item) {
    item.classList.remove('_active');
  });
  pointsArray[number].classList.add('_active');
}

buttonContainer.addEventListener('click', function (event) {
  if (event.target.classList.contains('slider__prev-button')) {
    this.closest('.slider__wrapper')
      .querySelector('.slider__image')
      .setAttribute('src', images[--number]);
    changeProgressbar();
  }
  if (event.target.classList.contains('slider__next-button')) {
    this.closest('.slider__wrapper')
      .querySelector('.slider__image')
      .setAttribute('src', images[++number]);
    changeProgressbar();
  }
  if (event.target.getAttribute('data-id')) {
    number = event.target.getAttribute('data-id');
    this.closest('.slider__wrapper')
      .querySelector('.slider__image')
      .setAttribute('src', images[number]);
    changeProgressbar();
  }

  if (number < 1) {
    this.closest('.slider__wrapper').querySelector(
      '.slider__prev-button'
    ).disabled = true;
  } else {
    this.closest('.slider__wrapper').querySelector(
      '.slider__prev-button'
    ).disabled = false;
  }
  if (number > images.length - 2) {
    this.closest('.slider__wrapper').querySelector(
      '.slider__next-button'
    ).disabled = true;
  } else {
    this.closest('.slider__wrapper').querySelector(
      '.slider__next-button'
    ).disabled = false;
  }
  clearInterval(timer1);
});



const domImage = document.querySelector('.slider__image');
const prevButton = document.querySelector('.slider__prev-button');
const nextButton = document.querySelector('.slider__next-button');

const autoScroll = () => {
  domImage.setAttribute('src', images[++number]);
  changeProgressbar();
  if (number < 1) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }
  if (number === images.length - 1) {
    clearInterval(timer1);
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }
};

const timer1 = setInterval(autoScroll, 2000);