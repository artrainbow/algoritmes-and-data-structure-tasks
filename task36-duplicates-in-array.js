/*
*
* Удалить дубликаты в массиве
*
 */

const array = [1, 1, 2, 3, 4, 1, 4, 2, 2, 3, 0];

const removeDuplicates = (array) => {
    const tpmArr = array.map(i => i);
    const uniqueVals = [];

    tpmArr.map(value => uniqueVals.indexOf(value) === -1 ? uniqueVals.push(value) : false);

    return uniqueVals;
};

const removeDuplicates2 = (array) => [...new Set(array)];

const removeDuplicates3 = (array) => {
    array.push([]);
    array.map(value => array[array.length - 1].indexOf(value) === -1 ? array[array.length - 1].push(value) : false);
    array = array[array.length - 1];
    array.pop();

    return array;
};

console.log(removeDuplicates(array), array);
console.log(removeDuplicates(array), array);
console.log(removeDuplicates2(array), array);
console.log(removeDuplicates3(array));