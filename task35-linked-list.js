/*
*
* Вывести значения односвязного списка
*
 */

const list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null,
            },
        },
    },
};

const printList = (obj) => {
    const temp = [];

    while (obj) {
        Object.entries(obj).forEach(([key, value]) => (key === 'value') ? temp.push(value) : false);
        obj = obj.next;
    }

    return temp;
};

console.log(printList(list));


