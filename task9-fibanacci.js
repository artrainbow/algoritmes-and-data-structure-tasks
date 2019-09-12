/*
*
* Задача: Напишите программу, которая будет печатать числа Фибоначчи максимально долго (без ошибок времени выполнения)
* Фишка этой задачи, вовремя определить переполнение буфера и не получить Overflow Exception.
*
 */


const printFibanacci = () => {

    const maxCounterValue = 1280; // 1280 max value
    let counter = 93; // 93 is optimal counter
    let [a, b, currentFibonacciValue] = [1, 1, 0];
    let arr = Array(10).fill(0).map((e, i) => counter + i);

    for (let i = 0; i < counter; i++) {

        console.log(currentFibonacciValue);

        a = b;
        b = currentFibonacciValue;
        currentFibonacciValue = a + b;

        if (i >= counter - 1 && counter < maxCounterValue) {
            counter = counter * 2;
            arr = Array(10).fill(0).map((e, j) => counter + j);
        }
    }

};

printFibanacci(); // 1.3069892237633987e+308

