/*
*
* Задача: написать функцию, которая проверяет все ли символы в строке встречаются один раз. Функция возвращает true/false
*
 */

const hasUniqueSymbols = (string) => !!string.length && [...string].map(l => [...string].filter(k => l === k))[0].length <= 1;

console.log(hasUniqueSymbols('ab'));     // true
console.log(hasUniqueSymbols(''));       // false
console.log(hasUniqueSymbols('aa'));     // false
console.log(hasUniqueSymbols('a'));     // true

const checkUniqueSymbols = (str) => !!str.length && !str
    .split('') // Make an array
    .filter((char, i, arr) => [...arr.slice(0, i), ...arr.slice(i + 1)].includes(char)) // Filter array to have only repeated symbols
    .length; // Return true if length is 0 and false otherwise

console.log(checkUniqueSymbols('ab'));     // true
console.log(checkUniqueSymbols(''));         // false
console.log(checkUniqueSymbols('aa'));     // false
console.log(checkUniqueSymbols('a'));     // true

/*
*
* Syntax explanation.
* !! means: !string.length => true/false (boolean value) and the next ! invert the value
*
* */