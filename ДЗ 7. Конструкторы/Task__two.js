// 2. Создать сущность автомобиля:

// Характеристики автомобиля отдельными свойствами, 3 свойства

// Методы:

// Вывод на экран данных об этом автомобиле
// Присвоение этого автомобиля владельцу (записать в автомобиль объект владельца)
// Все данные о человеке и автомобиле получать от пользователя. Реализовать необходимые проверки на корректность ввода (пустые поля, возраст >18 для человека и т.д. в случае необходимости).

// Максимально использовать функции



function userStuff() {
    this.name = prompt("Как тебя зовут?",);
    this.gender = prompt("Твой пол?");
    this.age = + prompt("Сколько тебе лет?");
   }
  

function carItems(user) {
    if (user.age >= 18){
        this.user = user;
        this.brand = carStuff("name of car?:");
        this.year = carStuff("year of carc ?");
        this.price = carStuff("Optim price ?")
    }
    else alert("Sorry, but you too yung");
}

let user = new userStuff();
let car = new carItems(user);


function carStuff(item){
    let text;
    do {
        text = prompt(item);
        if (text === null ){
            text = false;
        };
      } while (text.length === 0);
    return text;
};


console.log(car)