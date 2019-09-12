/* Finish the function numberToOrdinal, which should take a number
 and return it as a string with the correct ordinal indicator suffix (in English).

That is:

numberToOrdinal(1) ==> '1st'
numberToOrdinal(2) ==> '2nd'
numberToOrdinal(3) ==> '3rd'
numberToOrdinal(4) ==> '4th'
... and so on
*/

function numberToOrdinal(n) {

    let result = '0',
        arr = [],
        lastNum;

    if (n === 0) {
        return result;
    } else {
        arr = n.toString().split('');
        lastNum = n.toString().charAt(arr.length - 1);

        switch (lastNum) {
            case '1':
                arr.push('st');
                result = arr.join('').toString();
                return result;
                break;
            case '2':
                arr.push('nd');
                result = arr.join('').toString();
                return result;
                break;
            case '3':
                if (arr.join('').toString() === '13') {
                    arr.push('th');
                    result = arr.join('').toString();
                    return result;
                    break;
                } else {
                    arr.push('rd');
                    result = arr.join('').toString();
                    return result;
                    break;
                }
            default:
                arr.push('th');
                result = arr.join('').toString();
                return result;
                break;
        }
    }
}

console.log(numberToOrdinal(1));
console.log(numberToOrdinal(2));
console.log(numberToOrdinal(92));
console.log(numberToOrdinal(3));
console.log(numberToOrdinal(33));
console.log(numberToOrdinal(10));


