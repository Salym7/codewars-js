'use strict'

// I have a cat and a dog.
//
// I got them at the same time as kitten/puppy. That was humanYears years ago.
//
// Return their respective ages now as [humanYears,catYears,dogYears]

const humanYearsCatYearsDogYears = (humanYears) => {
    if (humanYears === 1) return [humanYears, 15, 15]
    if (humanYears === 2) return [humanYears, 24, 24]
    let catYears = 24 + (humanYears - 2) * 4
    let dogYears = 24 + (humanYears - 2) * 5
    return [humanYears, catYears, dogYears];
}
