'use strict'

function calculateYears(principal, interest, tax, desired) {
    if (principal === desired) return 0
    let years = 0
    for (; principal <= desired; years++) {
        principal = principal + (interest * principal - interest * principal * tax)
    }
    return years
}

console.log(calculateYears(1000, 0.05, 0.18, 1100));
