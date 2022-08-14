// 2. Дан массив
// [16, -37, 54,-4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, 235, 4, 47, 5|
// Найти сумму положительных значений и количество положительных элементов.

// Найдите минимальный элемент массива и его порядковый номер.

// Найдите максимальный элемент массива и его порядковый номер.

// Определить количество отрицательных элементов.

// Найти количество нечетных положительных элементов.

// Найти сумму четных положительных элементов.

// Найти произведение положительных элементов.

// Найти самый большой среди элементов массива, остальное обнулить.

let arr = [16, -37, 54,-4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, 235, 4, 47, 5]
console.log(arr)


// Найти сумму положительных значений и количество положительных элементов.


const positiveNum = arr.filter(function (value){
    return value > 0;
});
console.log(positiveNum);
console.log(positiveNum.length);

let sum = 0;
for (let i = 0; i < positiveNum.length; i++){
    sum += positiveNum[i];
}
console.log(sum);

// Найдите минимальный элемент массива и его порядковый номер.

let m = Math.min(...arr);
console.log(m)
let minNumber = arr.findIndex(i => i == '-63')
console.log(minNumber);


// Найдите максимальный элемент массива и его порядковый номер.

let mux = Math.max(...arr);
console.log(mux)
let muxNumber = arr.findIndex(i => i == `235`)
console.log(muxNumber);


// Определить количество отрицательных элементов.

const negativeNum = arr.filter(function (value){
    return value < 0;
});
console.log(negativeNum);
console.log(negativeNum.length);

// Найти количество нечетных положительных элементов.

const revOddArray = positiveNum .filter(function (value){
    return value % 2 !== 0;
})
console.log(revOddArray);
console.log(revOddArray.length)


// Найти сумму четных положительных элементов.

const OddArray = positiveNum .filter(function (value){
    return value % 2 == 0;
})
console.log(OddArray);

let sumOdd = 0;
for (let i = 0; i < OddArray.length; i++){
    sumOdd += OddArray[i];
}
console.log(sumOdd);


// Найти произведение положительных элементов.

let result = 1;
for (let i = 0; i < positiveNum.length; i++){
    result = result * positiveNum[i];
}
console.log(result);

// Найти самый большой среди элементов массива, остальное обнулить.

let max = positiveNum[0];
for (let i = 0; i < positiveNum.length; i++) {
    if (positiveNum[i] > max) {
        max = positiveNum[i];
    }
}

let res = positiveNum.map(val => max !== val ? 0 : val);
console.log(res);