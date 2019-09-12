/*
*
* Дана строка, слова в ней указаны через пробел. Вывести слова в порядке убывания длины.
* Пример: "My favorite music band is Rammstein" => Rammstein favorite music band My is
*
 */

const sortStringByLength = (string) => string.split(' ').sort((a,b) => b.length - a.length).join(' ');

console.log(sortStringByLength('My favorite music band is Rammstein')); // 'Rammstein favorite music band My is'