/*
*
* Написать функцию, которая принимает на вход два числа - время часовой и минутной стрелки,
* и возвражает угол между ними.
*
*/

const timerConverter = (h, m) => {
    if (h >= 0 && h < 12 && m >= 0 && m < 60) {

        const hA = h / 12 * 360 + m;
        const mA = m / 60 * 360;

        return hA - mA + 'deg';

    } else {
        console.log('ERROR');
    }
};

console.log(timerConverter(1, 5));