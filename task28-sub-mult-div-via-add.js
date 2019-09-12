/*
*
* Задача: реализовать операции вычитания, умножения и деления через операцию сложения
*
 */

const calculate = (number1, number2, operand) => {

    if (operand === '-') {
        return number1 + -number2;
    } else if (operand === '*') {
        let tmp = 0;
        for (let i = 0; i < Math.abs(number2); i++) (number2 > 0) ? tmp += number1 : tmp += -number2;
        return tmp;
    } else if (operand === '/' && number2 !== 0) {
        let tmp = 0;
        for (let i = 0; i < Math.abs(number2); i++) tmp = i;
        return ((number1 > 0 && number2 > 0) || (number1 < 0 && number2 < 0)) ? tmp : -tmp;
    } else {
        return false;
    }
};

console.log(calculate(1, 2, '-')); // -1
console.log(calculate(-2, 2, '*')); // -4
console.log(calculate(-2, -2, '*')); // 4
console.log(calculate(-2, 0, '*')); // 0
console.log(calculate(0, 3, '*')); // 0
console.log(calculate(12, 4, '/')); // 3
console.log(calculate(-12, 4, '/')); // -3
console.log(calculate(-12, -4, '/')); // 3
console.log(calculate(-12, 0, '/')); // false



