/*
*
* Написать функцию, которая будет проверять можно ли преобразовать строку так, чтобы она стала палиндромом.
* Пример:
* "bob" => true - уже является палиндромом
* "bbo" => true - можно сделать палиндромом
* "cat" => false - нельзя сделать палиндромом
*
 */

const isPolindrom = (string) => {
    const countLetters = [...string].map((letter, index, arr) => arr.filter(item => item === letter).length);
    const oddValuesCountArr = countLetters.filter(item => item%2);
    const isAllValuesEqual = (oddValuesCountArr[0] > 1) ? oddValuesCountArr.every(item => item === oddValuesCountArr[0]) : false;

    return oddValuesCountArr.length <= 1 || isAllValuesEqual;
};

console.log(isPolindrom('bobccdd')); // true
console.log(isPolindrom('boocdcob')); // false
console.log(isPolindrom('bob')); // true
console.log(isPolindrom('bobb')); // false
console.log(isPolindrom('bobbb')); // true
console.log(isPolindrom('cat')); // false
console.log(isPolindrom('catf')); // false
console.log(isPolindrom('caaabbc')); // true
console.log(isPolindrom('cc')); // true
console.log(isPolindrom('c')); // true