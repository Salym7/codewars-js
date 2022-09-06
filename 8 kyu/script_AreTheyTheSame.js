'use strict'

// Given two arrays a and b write a function comp(a, b)
// (orcompSame(a, b)) that checks whether the two arrays have the
// "same" elements, with the same multiplicities (the multiplicity of a
// member is the number of times it appears). "Same" means, here, that
// the elements in b are the elements in a squared, regardless of the order.

const comp = (array1, array2) => {
    if (!array1 || !array2 || array1.length !== array2.length) return false
    array1 = array1.map(n => n ** 2)
    for (let i = 0; i < array2.length; i++) {
        if (!array1.includes(array2[i])) return false
    }
    return true
}

const a1 = [121, 144, 19, 161, 19, 144, 19, 11];
const a2 = [121, 14641, 20736, 361, 25921, 361, 20736, 361];
console.log(comp(a1, a2));

// const comp = (a1, a2) => {
//     if (!a1 || !a2 || a1.length !== a2.length) return false;
//     return a1.map(x => x * x).sort().toString() === a2.sort().toString();
// }