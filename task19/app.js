// Задача 1
// Дан массив целых чисел nums. Напишите функцию, которая вернет true, если какое-либо значение встречается в массиве не менее двух раз, и вернуть false, если все элементы разные. 

const numbersArr = [1, 2, 3, 5, 2];

function isContainSame(params) {
  const numbersSet = new Set(params);
  console.log(params.length > numbersSet.size);
}

isContainSame(numbersArr);

// Задача 2
// Даны два массива целых чисел nums1 и nums2, вернуть массив состоящий из элементов, которые встречаются в обоих массивах. В массиве на выходе допустимо чтобы повторяющиеся значения встречались несколько раз


const nums1 = [4, 9, 5],
  nums2 = [9, 4, 9, 8, 4];

function getIntersection(arr1, arr2) {
  const arr = [];
  const arrSet1 = new Set(arr1);
  const arrSet2 = new Set(arr2);
  for (let value1 of arrSet1.values()) {
    for (let value2 of arrSet2.values()) {
      if (value1 == value2) {
        arr.push(value1);
      }
    }
  }

  console.log(arr);
}
getIntersection(nums1, nums2);