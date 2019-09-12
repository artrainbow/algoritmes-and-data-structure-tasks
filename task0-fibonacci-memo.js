/*
*
* Задача: написать рекурсивную функцию возвращающую порядковый номер чисела Фибоначчи с паттерном мемоизации.
*
 */

function fibonacciRecursive(n) { // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89,

    if (n <= 1) return 0;

    const tmpN = n - 2;

    const getNumber = (tmpN, memo) => {

        memo = memo || [];

        if (memo[tmpN]) {
            return memo[tmpN];
        }

        if (tmpN <= 1) return 1;

        return memo[tmpN] = getNumber(tmpN - 1, memo) + getNumber(tmpN - 2, memo);
    };


    return getNumber(tmpN);
}

console.log(fibonacciRecursive(1405));








