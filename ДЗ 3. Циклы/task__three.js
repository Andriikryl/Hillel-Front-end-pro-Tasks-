
// Дано целое число N (ввести через prompt). Вывести все целые числа от 1 до 100, квадрат которых не превышает числа N. Если N не является числом, то вывести ошибку.

let N = parseInt(prompt("ввести число"));

if (isNaN(N)){
    console.log("error nan")
}
else {    
    let i = 1;
    let iTwo = 100;

    while ((i**2 <  N) && iTwo>0) {
        console.log(i**2)
        i += 1;
        iTwo -=1;
    }
}