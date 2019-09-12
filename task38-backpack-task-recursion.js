/*
*
* Задача о рюкзаке.
* На вход подается массив чисел и большое число, в котором должно поместиться такое кол-во чисел, чтобы их сумма стремилась к большому числу.
*
* */

const array = Array.from(Array(1000).keys());

const backPackAlgorithm = (array, bigNumber, k) => {
    const quantityOfSums = Math.pow(2, array.length) - 1; // общее количество сумм элементов массива 2^N - 1
    let bin = 0;
    let allSums = [];

    const getZeros = (number) => {
        if (number === 0 || typeof(number) !== 'number') return '0';

        let result = '';

        for (let i = 1; i <= number; i++) result += '0';

        return result;
    };


    const getAllSumsOfArray = (array, binNumber) => { // поиск всех возможных сумм
        let result = 0;
        let sum = [];

        [...binNumber].map((i, index) => {
            if (i !== '0') {
                result += array[index];
                sum.push(array[index]);
            }
        });

        return [result, sum];
    };

    for (let i = 1; i <= quantityOfSums; i++) {
        bin = i.toString(2); // получаем уникальные числа в бинарном виде
        allSums = getAllSumsOfArray(array, bin);

        if (bin.length < array.length) bin = getZeros(array.length - bin.length) + bin; // добавляем недостающие нули в начало
        if (allSums[0] <= bigNumber && allSums[0] > bigNumber - k) {
            console.log(allSums);
            break;
        }
    }
};

backPackAlgorithm(array, 200, 4);





