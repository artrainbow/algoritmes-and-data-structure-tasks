/*
*
* Задача: дан массив с целыми числами.
* Написать функцию, ктр преобразует массив следующим образом: каждое i-е значение массива
* это произведение всех значений исходного массива за исключением i-го значения.
* В решении нельзя использовать операцию деления.
*
 */

const getMultipleElementsInArray = (array) => {
    const newArray = array.map(i => i);
    let tmpArray = array.map(i => i);
    let result = [];

    for (let i = 0; i < newArray.length; i++) {
        tmpArray.splice(i, 1);
        result.push(tmpArray.reduce((prev, next) => prev * next));
        tmpArray = array.map(item => item);
    }

    return result;
};

console.log(getMultipleElementsInArray([2, 4, 3, 5])); // [ 60, 30, 40, 24 ]



