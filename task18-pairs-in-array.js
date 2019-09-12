/*
*
* Дан массив натуральных чисел. Каждое из чисел присутствует в массиве ровно два раза, кроме одного. Найти число без пары.
*
 */

const getUniqueNumberInArray = (array) =>{

    if (!Array.isArray(array) || array.length === 0) return false;

    const newArray = array.map(i => i);
    let result = [];

    newArray.map((item, index) => result ^=newArray[index]);

    return result;
};

console.log(getUniqueNumberInArray([ 0, 0, 7, 1, 1])); // 7
console.log(getUniqueNumberInArray([ 2,2,1,1,3,3,4,4,1221 ])); // 1221