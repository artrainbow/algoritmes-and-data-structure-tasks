/*
*
* Напишите функцию, заменяющий все пробелы в строке символами '%20'.
*
 */

const getStringWithReplacedSymbols = (str, symbol) => str.replace(/\s/g, symbol);

console.log(getStringWithReplacedSymbols('Mr John Smith','%20')); // Mr%20John%20Smith