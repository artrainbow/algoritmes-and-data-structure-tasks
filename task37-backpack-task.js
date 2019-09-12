/*
*
* Задача о рюкзаке.
* На вход подается массив чисел и большое число, в котором должно поместиться такое кол-во чисел,
* чтобы их сумма стремилась к большому числу.
*
* */

const array = Array.from(Array(500).keys());
// const array = [1, 5000, 200, 1];

const backPackAlgorithm = (array, range) => {
    const quantityOfSums = Math.pow(2, array.length) - 1; // общее количество сумм элементов массива 2^N - 1

    let bin,
        optimalSum = [];

    // const getZeros = (number) => {
    //     let result = '';
    //
    //     for (let i = 1; i <= number; i++) result += '0';
    //
    //     return result;
    // };

    const getAllSumsOfArray = (array, binNumber) => { // поиск всех возможных сумм
        let result = 0;
        let sum = [];

        for (let i = 0; i < binNumber.length; i++) {
            if ([...binNumber][i] !== '0') {
                result += array[i];
                sum.push(array[i]);
            }
        }

        return [result, sum];
    };

    for (let i = 1; i <= quantityOfSums; i++) {
        bin = i.toString(2); // получаем уникальные числа в бинарном виде

        optimalSum = getAllSumsOfArray(array, bin);
        // if (bin.length < array.length) bin = getZeros(array.length - bin.length) + bin; // добавляем недостающие нули в начало


        if (optimalSum[0] <= range[0] && optimalSum[0] > range[0] - range[1]) return optimalSum;
    }

    // return [0, [0]];
};

console.log(backPackAlgorithm(array, [500, 355]));