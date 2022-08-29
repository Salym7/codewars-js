'use strict'

// Take an array and remove every second element from the array.
// Always keep the first element and start removing with the next element.

const removeEveryOther = (arr) =>{
    const newArr=[];
    for (let i = 0; i < arr.length; i+=2){
        newArr.push(arr[i]);
    }
    return newArr;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(removeEveryOther(arr));

// const removeEveryOther = arr => arr.filter((item, i) =>  i % 2 === 0);