'use strict'

function digitalRoot(n) {
    if (n < 10) return n;
    return digitalRoot((n + '').split('').reduce((acc, val) => acc + +val, 0));

}

console.log(digitalRoot(18));
