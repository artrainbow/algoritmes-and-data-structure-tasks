/*
*
* Дана числовая матрица NxN. Напишите функцию, поворачивающую матрицу на 90 градусов по часовой стрелке.
*
 */

const rotateMatrix = (matrix) => {

    if (!Array.isArray(matrix) || !Array.isArray(matrix[0]) || matrix.length === 0) return false;

    const tmpMatrix = matrix.map(i => i.map(j => j)); // clone the matrix
    const maxLength = (tmpMatrix.length >= tmpMatrix[0].length) ? tmpMatrix.length : tmpMatrix[0].length;
    let resultMatrix = [];
    let tmpResult = [];
    let counter1 = 1;
    let counter2 = maxLength - 1;

    function rec() {

        tmpMatrix.map(j => (counter2 === maxLength - counter1) ? tmpResult.unshift(j[counter1 - 1]) : null);

        if ((counter1 <= tmpMatrix[0].length && tmpMatrix.length >= tmpMatrix[0].length)
            || (counter1 <= maxLength && tmpMatrix.length < tmpMatrix[0].length)) {
            resultMatrix.push(tmpResult);
            tmpResult = [];
            counter1++;
            counter2--;
            rec();
        }
    }

    rec();

    return resultMatrix;
};

const matrix1 = [
    [2, 3, 4, 5, 6],
    [0, 0, 0, 0, 7],
    [0, 0, 0, 0, 7],
];

const matrix2 = [
    [2, 3, 4, 5, 6],
    [0, 0, 0, 0, 7],
    [0, 0, 0, 0, 7],
    [0, 0, 0, 0, 7],
    [0, 0, 0, 0, 7],
    [0, 0, 0, 0, 7],
    [0, 0, 0, 0, 7],
];

const matrix3 = [
    [2, 3, 4, 5, 6],
    [0, 0, 0, 0, 7],
    [0, 0, 0, 0, 7],
    [0, 0, 0, 0, 7],
    [0, 0, 0, 0, 7],
];


rotateMatrix(matrix1).map(arr => console.log(...arr));
rotateMatrix(matrix2).map(arr => console.log(...arr));
rotateMatrix(matrix3).map(arr => console.log(...arr));


