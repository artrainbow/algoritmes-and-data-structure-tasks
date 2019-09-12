// Your job is to create a function, which masks credit card numbers
// It might have or might not have dashes in it
// If a plain string is passed, you must return it unchaged
// If credit card number is smaller than 6 digits you must return it unchanged

function maskify(creditCard) {
    let result = '',
        arr = [],
        sign = '#';

    creditCard.split('').forEach((symbol, i) => {

        if (creditCard.length === 16) {

            if (i !== 0 && i < 12) symbol = sign;

        } else if (creditCard.length === 19) {

            if (i === 0 || symbol === '-' || symbol.match(/\D/g) || i > 14) {
            } else {
                symbol = sign;
            }
        } else if (creditCard.length < 6 && symbol.match(/\d/g)) {
        } else if (symbol.match(/\D/g)) {
        } else {
            symbol = sign;
        }

        arr.push(symbol);
        result = arr.join('').toString();
    });

    return result;
}

console.log(maskify('5512103073210694'));
console.log(maskify('4556-3646-0793-5616'));
console.log(maskify('54321'));
console.log(maskify('Skippy'));
console.log(maskify('1234-SKIP-3456-4567'));