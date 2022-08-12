// Дано целое число (ввести через prompt). Выяснить, является ли оно простым (простым называется число, больше 1, не имеющих других делителей кроме 1 и себя).
// Пример простых чисел: 3, 17, 7, 5

const num = +prompt();
let isSimple = true;

for (let i = num - 1; i > 1; i-- ){
    if (num % i === 0){
        isSimple = false;
        break;
    }
}

console.log(isSimple ? "simple" : "not simple");