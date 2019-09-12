/*
*
* Задача: найти и вывести все пары целых чисел в массиве, сумма которых равна заданному значению X.
*
 */

const getSumElementsInArray = (array, sum) => {

    const newArray = array.map(i => i);
    let result = [];

    newArray.map(i => {
        newArray.map(j => {
            if (i + j === sum) result.push([i, j]);
        })
    });

    return result;
};

console.log(getSumElementsInArray([ -2, -1, 0, 3, 4, 5, 7, 8, 10, 11, 12 ], 10)); // [ [ -2, 12 ],[ -1, 11 ],[ 0, 10 ],[ 3, 7 ],[ 5, 5 ], [ 7, 3 ],[ 10, 0 ],[ 11, -1 ],[ 12, -2 ] ]





