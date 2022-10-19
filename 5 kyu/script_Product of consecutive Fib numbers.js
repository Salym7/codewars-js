'use strict'

// The Fibonacci numbers are the numbers in the following integer sequence (Fn):
//
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
//
// such as

// productFib(714) # should return (21, 34, true),
// # since F(8) = 21, F(9) = 34 and 714 = 21 * 34
//
// productFib(800) # should return (34, 55, false),
// # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
// -----


function productFib(prod) {
    let maxNumber = 1
    let a = 1;
    let b = 1;
    while (prod > maxNumber) {
        let c = a + b;
        a = b;
        b = c;
        maxNumber = a * b
    }
    if (maxNumber === prod) return [a, b, true];
    return [a,b,false];
}

console.log(productFib(193864606));

// function productFib(prod){
//     let n = 0;
//     let nPlus = 1;
//     while(n*nPlus < prod) {
//         nPlus = n + nPlus;
//         n = nPlus - n;
//     }
//     return [n, nPlus, n*nPlus===prod];
// }