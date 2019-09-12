/*
*
* Дан массив целых чисел. Вывести максимальную сумму любых 2ух элементов в массиве.
* Суммировать элементы можно только последовательно.
* Пример: [-1, 10, -9, 5, 6, -10]
* Вывод: 11
*
 */

const getMaxSumArray = (array) => {

    if (!Array.isArray(array) || array.length === 0) return false;
    if (array.length === 1) return array[0];

    const newArray = array;
    let tempResult = [];

    newArray.reduce((sum, current) => {

        if ((sum + current) > sum) {
            tempResult.push(sum + current);
            sum = current;
        } else {
            tempResult.push(current);
            sum = 0;
        }

        return sum;
    });


    return Math.max(...tempResult);
};


console.log(getMaxSumArray([-1, 100, 5, 5, 100, -10])); // 105
console.log(getMaxSumArray([-1, 10, -9, 5, 6, -10])); // 11
console.log(getMaxSumArray([-100, 3, 4, 2, -10, -10, 67, 0])); // 67
console.log(getMaxSumArray([-1, -1])); // -1
console.log(getMaxSumArray([1])); // 1
