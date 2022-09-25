'use strict'

// The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:
//
// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

const maxSequence = (arr) => {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 2; j <= arr.length; j++) {
            const sumArr = arr.slice(i, j).reduce((acc, item) => (acc + item), 0)
            if (sumArr > sum) {
                sum = sumArr
            }
        }

    }
    for (let i = arr.length-1; i > 0; i--) {
        for (let j = arr.length-2; j > 1; j--) {
            const sumArr = arr.slice(i, j).reduce((acc, item) => (acc + item),0)
            console.log(sumArr);
            if (sumArr > sum) {
                sum = sumArr
            }
        }

    }
    return sum
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]));