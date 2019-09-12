/*
*
* Написать функцию, ктр "сжимает" строку. Если полученная строка оказалась больше исходной, то вывести исходную.
* Например, дана строка "ZZZABBEEE", получить строку вида "Z3A1B2E3", т.е. подставить счетчик вхождения символа.
*
 */

const compressString = (string) => {

    let result = [];
    let counter = 0;
    let tmp;

    [...string].map((item, index, arr) => {
        if (item === arr[index + 1]) {
            tmp = counter++;
        } else if (item === arr[index - 1]) {
            counter = 0;
            result.push(item + Number.parseInt(tmp + 2));
        } else {
            result.push(item + 1);
        }
    });

    return (result.join('').length < string.length) ? result.join('') : string;

};


console.log(compressString('ZZZABBEEEE')); // Z3A1B2E4
console.log(compressString('ZZZABBEEEEEEEEEEESQQQQ')); // Z3A1B2E4
console.log(compressString('ZABE')); // ZABE
console.log(compressString('Z')); // Z