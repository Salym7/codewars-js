'use strict'

// Consider an array/list of sheep where some sheep may be missing from their place.
// We need a function that counts the number of sheep present in the array (true means present).

const countSheeps = arrayOfSheep => arrayOfSheep.reduce((sum, current) => current === true ? sum += 1 : sum, 0);

const arr = [true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]

console.log(countSheeps(arr));