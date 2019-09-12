/*
*
* Задача: Вывести все простые числа до N, N - натуральное число.
*
 */

const getPrimeNumbers = (N) => { // Решето Эратосфена

    let array = Array(N - 1).fill(0).map((i, j) => j + 2);

    for (let i = 2; i < N; i++) {
        array = array.filter(k => {
            if ((k % i) || k === i) return k;
        });
    }

    return array;
};

console.log(getPrimeNumbers(100)); // 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97






