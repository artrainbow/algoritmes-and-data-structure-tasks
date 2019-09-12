/*
*
* Дан отсортированный по возрастанию, но циклически сдвинутый массив.
* Нужно вывести индекс заданного элемента X (если такой элемент есть) в массиве.
* Пример: [9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8]; X = 8
* Вывод: 10
*
 */


/* simple solution */

const getIndexElementArray = (array, value) => array.indexOf(value);

console.log(getIndexElementArray([9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8], 8)); // 10


/* optimal solution */

const getIndexElementArrayRapidVersion = (array, value) => {

    if (!Array.isArray(array) || array.length === 0) return false;

    const newArray = array;
    let startIndex = 0;
    let lastIndex = --newArray.length;

    while (lastIndex - startIndex > 1) {
        let middleIndex = Math.round((lastIndex + startIndex) / 2);
        (value >= newArray[startIndex] && value <= newArray[middleIndex]) ? lastIndex = middleIndex : startIndex = middleIndex + 1;
    }

    return (newArray[startIndex] === value) ? startIndex : lastIndex;

};

console.log(getIndexElementArrayRapidVersion([9, 10, 11, 1, 2, 3, 4, 5, 6, 7, 8], 8));  // 10
