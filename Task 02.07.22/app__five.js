// 5) Разложить по цифрам пятизначное число и вывести в исходном порядке через пробел, пример: 10369 1 0 3 6 9.


let number = prompt("insert number");
let array = (""+number).split("").map(Number)
alert(array);
console.log(array)