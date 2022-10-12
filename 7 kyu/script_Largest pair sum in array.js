'use strict'

// Given a sequence of numbers, find the largest pair sum in the sequence.

const largestPairSum = (numbers) => {
    numbers.sort((a, b) => b - a)
    return numbers[0] + numbers[1]
}