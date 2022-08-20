// 2. Создать функцию, вычисляющую среднее арифметическое числовых элементов массива любой длины.



function getArray(array){
    let total = 0;
    for (let i = 0; i < array.length; i++){
        total += array[i] /array.length;
    }
    return total;
}

const totalNumber = getArray
console.log(totalNumber([1,2,3,4,5]))
