'use strict'

class SmallestIntegerFinder {
    findSmallestInt(args) {
        let currentMin = args[0];
        for (let i = 1; i < args.length; i++) {
            if (args[i] < currentMin) currentMin = args[i]
        }
        return currentMin
    }
}

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//        return Math.min(...args)
//     }
// }


// const  findSmallestInt = (args) => args.reduce((acc, current) => acc > current ? acc = current : acc, Infinity);
// const array = [34, -345, -1, 100]
// console.log(findSmallestInt(array));


// Given an array of integers your solution should find the smallest integer.
    