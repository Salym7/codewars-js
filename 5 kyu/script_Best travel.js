'use strict'

// John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list
// of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to
// Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest
// possible to please Mary and John?

function chooseBestSum(t, k, ls) {
    const arr = [];

    function rec(sum, ar, n) {
        if (n === 0) {
            arr.push(sum);
        } else {
            for (let i = 0; i < ar.length; i++) {
                rec(sum + ar[i], ar.slice(i + 1), n - 1);
            }
        }
    }

    rec(0, ls, k);

    const sol = arr.sort((a, b) => b - a).find(a => a <= t);
    return sol || null
}

console.log(chooseBestSum(230, 3, [91, 74, 73, 85, 73, 81, 87]));
