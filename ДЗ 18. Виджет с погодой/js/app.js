// С помощью ajax-запроса вывести погоду
// http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19

// q=LVIV 
// город, для которого показать погоду
// APPID=5d066958a60d315387d9492393935c19
// обязательная часть для получения доступа к API

// Расшифровка ответа:
// temp – температура
// pressure - давление
// description – описание
// humidity – влажность
// speed – скорость ветра
// deg – направление в градусах
// icon - значок, где 10d код иконки

// http://openweathermap.org/img/w/10d.png

"use strict";

const url =
  "http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19";
const wetherList = document.getElementById("wether-list");

fetch(url)
  .then((response) => response.json())
  .then(({ main, wind, weather }) => {
    wetherList.innerHTML = `
    <h1> ${main.temp}°C</h1>
    <p>Wind: ${wind.speed} km/h ${wind.deg}°</p> 
       <p>Pressure: ${main.pressure} hPa</p>
    <p>Humidity: ${main.humidity} %</p> `;

    weather.forEach(function (user) {
      const block = document.createElement("div");
      block.innerHTML = `
        <img src=" http://openweathermap.org/img/w/${user.icon}.png" />
        <p> ${user.description}</p> `;
      wetherList.append(block);
    });
  });