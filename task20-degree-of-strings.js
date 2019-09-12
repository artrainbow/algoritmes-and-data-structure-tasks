/*
*
* дана строка STR, степенью K строки STR будет строка вида: STR1+STR2+... +STRk (плюс означает конкатенацию).
* Корнем k степени из строки STR называется такая строка T (если это возможно), что T степени K  =  STR.
* Написать функцию, ктр выводит строку STR в степени K.
*
*/

const getDegreeOfString = (string, degree = 0) => {

    if (string.length === 0) return false;

    let result = [];

    if (degree > 0) {
        while (result.length < degree) {
            result.push(string);
        }
    } else if (degree < 0) {

        const subStrFirst = string.substring(0, string.length / -degree);
        const subStrNext = string.substring(string.length / -degree, (string.length / -degree) * 2);

        if (subStrFirst === subStrNext) {
            [...string].map(i => {
                if (result.length < string.length/-degree) {
                    result.push(i);
                }

            });
        } else {
            result.push('error');
        }
    } else if (degree === 1) {
        return result.push(string);
    } else {
        result.push('undefined');
    }

    return result.join('');
};

console.log(getDegreeOfString('abcd', 3)); // abcdabcdabcd
console.log(getDegreeOfString('abc', 1)); // abc
console.log(getDegreeOfString('abcabcabc', -3)); // abc
console.log(getDegreeOfString('abcd', -3)); //  error
console.log(getDegreeOfString('abcabcabc', 0)); // ''
console.log(getDegreeOfString("AbcdeAbcdeAbcde", -3)); // 'Abcde'
console.log(getDegreeOfString("", -3)); // 'Abcde'
