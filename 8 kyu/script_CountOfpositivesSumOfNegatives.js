'use strict'

const countPositivesSumNegatives = (input) => {
    if (input === null || !input.length) return []
    const sumNegative = () => input.reduce(function (sum, elem) {
        return elem < 0 ? sum + elem : sum;
    }, 0);
    const amountPositive = () => input.reduce(function (sum, elem) {
        return elem > 0 ? sum + 1 : sum;
    }, 0);
    return [amountPositive(), sumNegative()]
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]
console.log(countPositivesSumNegatives(array));

//Given an array of integers.
//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.
//0 is neither positive nor negative.
//If the input is an empty array or is null, return an empty array.