'use strict'

//Given a list of integers, determine whether the sum of its elements is odd or even.
//Give your answer as a string matching "odd" or "even".
//If the input array is empty consider it as: [0] (array with a zero).

const oddOrEven = (array) => {
    if (!array.length) return 'even'
    const sumArr = array.reduce((sum, elem) => sum + elem, 0);
    return sumArr % 2 === 0 ? 'even' : 'odd'
}
const arr = [0, 1, 4]

console.log(oddOrEven(arr));

// const oddOrEven = a => a.reduce((s,n)=> s + n,0)%2 === 0 ? "even" : "odd";
