/*
*
* Задача: Дана матрица как двумерный массив массивов одинаковой длины,
* если элемент матрицы равен 0, то всю строку и весь столбец нужно обнулить.
*
 */

const changeMatrix = (matrix) => {

    if (!Array.isArray(matrix) || !Array.isArray(matrix[0]) || matrix.length === 0) return false;

    const tmpMatrix = matrix.map(i => i.map(j => j)); // clone the matrix
    const resultMatrix = matrix.map(i => i.map(j => j)); // clone the matrix

    tmpMatrix.map((arr, i) => {
        arr.map((item, j) => {
            (item === 0) ? (
                resultMatrix.map(z => z[j] = 0), // fill columns
                    resultMatrix[i].fill(0) // fill rows
            ) : item;
        })
    });

    return resultMatrix;
};

const matrix = [
    [1, 1, 1, 1],
    [0, 1, 1, 1],
    [1, 1, 0, 1],
    [1, 1, 1, 1],
];

changeMatrix(matrix).map(arr => console.log(...arr));