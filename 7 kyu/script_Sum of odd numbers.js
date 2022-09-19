'use script'

// Given the triangle of consecutive odd numbers:

// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

const rowSumOddNumbers = (n) => {
    const arr = []
    let oddNumber = 1
    for (let i = 0; i < n; i++) {
        const innerArr = []
        for (let j = 0; j < i + 1; j++) {
            innerArr.push(oddNumber)
            oddNumber += 2
        }
        arr.push(innerArr)
    }

    return arr[n - 1].reduce((a, b) => a + b, 0)
}

// const rowSumOddNumbers = (n) => n*n*n

console.log(rowSumOddNumbers(3));


