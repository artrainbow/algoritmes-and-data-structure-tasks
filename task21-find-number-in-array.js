/*
*
* Задача: дан массив arr,
* в ктр в случайном порядке находятся натуральные числа от 1 до N.
* Каждое число встречается в массиве не более одного раза.
* Но одно число заменили на 0. Найти это число.
*
 */

const getRemovedElementInArray = (array, n) => {

    let sumOfArray = array.reduce((prev, next) => prev + next);
    let expectedSumOfArray = n * (n + 1) / 2;

    return  expectedSumOfArray - sumOfArray;
};

const getRemovedElementInArray2 = (array, n) => {

    let arrXorSum = 0,
        totalXorSum = n + 1;

    arr.forEach(item => arrXorSum ^= item);

    // свойство xor: если A xor B = C, то A = B xor C
    return totalXorSum ^ arrXorSum;
};


const n = 10;
const arr = [1, 6, 7, 4, 5, 2, 3, 0, 10, 8];
console.info(getRemovedElementInArray(arr, n)); // 9
console.info(getRemovedElementInArray2(arr, n)); // 9


