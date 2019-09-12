/*
*
* Дан отсортированный по возрастанию массив, но циклически сдвинут. Пример, [3, 4, 5, 6, 7, 8, 1, 2]
* Написать алгоритм, который оптимально находит минимальный элемент в таком массиве.
*
 */


/* простой в реализации, но не оптимальный вариант решения */

const getMinValue = (array) => Math.min(...array);
const arr = [...Array(120000).keys()];

console.log(getMinValue(arr)); // 0
console.log(getMinValue([3, 4, 5, 6, 7, 8, 1, 2])); // 1


/* оптимальный вариант решения */

const getMinValueRapidVersion = (array) => {

    if (!Array.isArray(array) || array.length === 0) return false;

    let newArray = array.map(i => i);

    while (newArray.length > 2) {
        const startValue = newArray[0];
        const middleValue = newArray[Math.round(newArray.length / 2)];
        const endValue = newArray[newArray.length - 1];

        (startValue < middleValue && middleValue > endValue) ? newArray = newArray.splice(Math.round(newArray.length / 2), newArray.length - 1) : newArray = newArray.splice(0, Math.round(newArray.length / 2));
    }

    return newArray[0] > newArray[1] ? newArray[1] : newArray[0];
};


console.log(getMinValueRapidVersion([3, 4, 5, 6, 7, 8, 0, 1, 2])); // 0
console.log(getMinValueRapidVersion([7, 1, 2, 3, 4, 5, 6])); // 1
console.log(getMinValueRapidVersion([])); // false
console.log(getMinValueRapidVersion(arr)); // 0