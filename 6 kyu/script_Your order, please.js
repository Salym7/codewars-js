'use strict'

// Your task is to sort a given string. Each word in the string will contain
// a single number. This number is the position the word should have in the result.

const order = (words) => {
    const array = words.split(' ');
    const sortedArray = [];
    for (let i = 0; i <= array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[j].indexOf(i) >= 0) {
                sortedArray.push(array[j]);
            }
        }
    }
    return sortedArray.join(' ');
}

console.log(order('is2 Thi1s T4est 3a'));
