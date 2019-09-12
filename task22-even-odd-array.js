/*
*
* Дан числовой массив. Выполнить перестановку в массиве так, чтобы все четные элементы были слева, все нечетные - справа.
*
 */

const separateOddEvenElementsInArray = (array) => {

    //TODO: check the array

    const oddArr = [];
    const evenArr = [];

    array.map(i => (i % 2) ? evenArr.push(i) : oddArr.push(i));

    return [...oddArr, ...evenArr];
};

console.log(separateOddEvenElementsInArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); //[ 2, 4, 6, 8, 10, 1, 3, 5, 7, 9 ]



