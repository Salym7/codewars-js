'use strict'

// You are going to be given an array of integers. Your job is to take that array and
// find an index N where the sum of the integers to the left of N is equal to the sum
// of the integers to the right of N. If there is no index that would make this happen, return -1.

const findEvenIndex = (arr) => {
    if (arr.length < 1) return []
    if (arr.length === 1) return arr[0]
        for (let i = 1; i < arr.length - 1; i++) {
            if ((arr.slice(0, i).reduce((a, b) => a + b)) === (arr.slice(i + 1, arr.length).reduce((a, b) => a + b))) return i
        }
    if (arr.slice(1, arr.length).reduce((a, b) => a + b) === 0) return 0
    if (arr.slice(0, arr.length - 1).reduce((a, b) => a + b) === 0) return arr.length
    return -1
}
let array = [10, -80, 10, 10, 15, 35, 20]
console.log(findEvenIndex(array));

// function findEvenIndex(arr){
//     let left = 0;
//     let right = arr.reduce((s,n) => s + n, 0);
//     for (let i = 0; i < arr.length; i++) {
//         right -= arr[i];
//         if (left === right) return i;
//         left += arr[i];
//     }
//     return -1;
// }