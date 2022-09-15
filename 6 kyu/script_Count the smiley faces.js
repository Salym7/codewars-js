'use strict'

// Given an array (arr) as an argument complete the function countSmileys that
// should return the total number of smiling faces. :) :D ;-D :~)

const countSmileys = (arr) => {
    if (!arr) return 0
    let count = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === ':)' || arr[i] === ':D' || arr[i] === ';-D' || arr[i] === ':~)'|| arr[i] === ':-)') count += 1
        if (arr[i] === ';)' || arr[i] === ';D' || arr[i] === ':-D' || arr[i] === ';~)'|| arr[i] === ';-)') count += 1
    }
    return count
}

// const countSmileys = (arr) => {
//     var smileys = [":)",";)",":-)",";-)",";~)",":~)",":D",";D",":-D",":~D",";-D",";~D"];
//     var count = 0;
//     for (var i=0; i<arr.length; i++){
//         for (var j=0; j<smileys.length; j++){
//             if (arr[i]===smileys[j]){
//                 count++;
//             }
//         }
//     }
//     return count;
// }