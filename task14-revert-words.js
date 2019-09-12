/*
*
* Простенькая задачка на вывод слов в строке в обратном порядке. Слова разделены только пробелами.
*
 */

const reverseWordsInString = string => string.split(' ')
    .map(i => i.split('').reverse().join(''))
    .join(' ');



console.log(reverseWordsInString('ab aab ac')); // ba baa ca
console.log(reverseWordsInString('мама мыла раму')); // амам алым умар