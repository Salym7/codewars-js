'use strict'

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate
// the total time required for all the customers to check out!
//   input
// customers: an array of positive integers representing the queue. Each integer represents a customer,
// and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.
//   output
// The function should return an integer, the total time required.
//   Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)
// Examples
//
// queueTime([5,3,4], 1)// should return 12
// queueTime([10,2,3,3], 2)// should return 10
// queueTime([2,3,10], 2)// should return 12

function queueTime(customers, n) {
    const arr = []
    for (let i = 0; i < n; i++) {
        arr.push(0)
    }
    for (let i = 0; i < customers.length; i++) {
        const index = arr.indexOf(Math.min(...arr))
        arr[index] += customers[i]
    }
    return Math.max(...arr)
}

console.log(queueTime([1, 2, 2, 3, 3], 5));