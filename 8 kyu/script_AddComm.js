'use strict'

// function foo(s) {
//     const result = []
//     const array = s.split('')
//     console.log(array.length);
//     console.log(array);
//     const recur = (count, arr) => {
//        const nextArr = arr.splice(count, 0, ',')
//         for (let i = count; i < arr.length; i++) {
//             console.log(arr.splice(i, 0, ','));;
//             result.push(arr)
//         }
//         if (count < arr.length) return
//         recur(count+1,nextArr)
//     }
//     recur(1, array)
//
//     return result.map(s => s.join(''))
// }

// function permutePunc(str) {
//     const characters = str.split('');
//     const variants = [];
//     for (let i = 0; i < 2 ** (str.length - 1); i++) {
//         let variant = str[0] || '';
//         [...i.toString(2).padStart(str.length - 1, '0')].forEach((el, i) => {
//             variant += ((el === 0) ? '' : '.') + (str[i + 1] || '');
//         });
//         variants.push(variant);
//     }
//     return variants;
// }

function permutePunc(str) {
    const characters = str.split('');
    return new Array(2 ** ((str.length || 1) - 1))
        .fill(0)
        .map((_, i) =>
            [...i.toString(2).padStart(str.length - 1, '0')]
                .reduce((variant, el, i) =>
                    variant + ((el == 0) ? '' : '.') + (str[i + 1] || ''), str[0] || ''));
}

console.log(permutePunc('abcd'));