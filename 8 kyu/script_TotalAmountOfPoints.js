'use strict'

// For example: ["3:1", "2:2", "0:1", ...]
//
// Write a function that takes such collection and counts the points of our team in the championship.
// Rules for counting points for each match:
//
// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

const points = games => {
    let point = 0
    games.forEach(callback)
    function callback (num) {
        const arr = num.split('')
        if (arr[0] > arr[2]) return point += 3
        if (arr[0] === arr[2]) return point += 1
    }
    return point
}
console.log(points(["1:0","2:0","3:0","4:4","2:2","3:3","1:4","2:3","2:4","3:4"]));

// const points=games=>games.reduce((output,current)=>{
//     return output += current[0]>current[2] ? 3 : current[0]===current[2] ? 1 : 0;
// },0)