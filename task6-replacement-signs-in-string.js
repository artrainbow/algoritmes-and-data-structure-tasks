/*
*
* Написать функцию, которая определяет, является ли одна строка перестановкой другой.
*
* Например:
*
* abc, cab => true
* abc, cad => false
*
 */

const isStringsRearrenged = (firstString, secondString) => (firstString.length !== secondString.length) ? false : [...firstString].sort().join('') === [...secondString].sort().join('');

console.log(isStringsRearrenged('abc', 'cab')); // true
console.log(isStringsRearrenged('abc', 'caba')); // false
console.log(isStringsRearrenged('abc', 'cad')); // false
console.log(isStringsRearrenged('', '')); // true