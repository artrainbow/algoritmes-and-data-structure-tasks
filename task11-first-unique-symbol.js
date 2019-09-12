/*
*
* Вывести первый уникальный символ в строке.
*
 */

const getFirstUniqueSymbol = (string) => {

    if (string.length === 1) return string;

    const arrIndexesOfUnicueSymbols = [...string].map(i => string.indexOf(i)).filter(i => i !== 0);
    const minIndex = Math.min(...arrIndexesOfUnicueSymbols);

    return [...string][minIndex];
};


console.log(getFirstUniqueSymbol('avacabbagjgufctesnp')); // v
console.log(getFirstUniqueSymbol('a')); // a
console.log(getFirstUniqueSymbol('aaaa')); // undefined