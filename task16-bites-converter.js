/*
*
* Написать функцию, которая принимает на вход число байтов,
* и возвражает число в Кб или Мб.
*
*/

const bytesConverter = (number) => {
    if (typeof number !== 'number' || isNaN(number)) {
        try {
            throw new Error('The function argument should be a number!');
        } catch (e) {
            return e;
        }
    }
    if (number < 1000000 && number > 999) return `${Math.floor(number / 1000)}Kb`;
    if (number >= 1000000) return `${parseFloat((number / 1000000).toFixed(2))}Mb`;
    return `${number} bytes`;
};

console.log(bytesConverter(20333024));