// 1. Создать сущность человека (данные вводит пользователь)

// имя
// возраст
// Метод вывода данных об объекте



function userStuff() {
    this.name = prompt("Как тебя зовут?",);
    this.gender = prompt("Твой пол?");
    this.age = + prompt("Сколько тебе лет?");
   }
  
  let user = new userStuff();
  console.log(user);
  
  function showData(userName){
    for (item in userName){
      console.log
      (item, "-" ,userName[item]);
    }
  }
  
  showData(user);