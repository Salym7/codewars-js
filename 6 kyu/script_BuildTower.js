'use strict'

// Build a pyramid-shaped tower given a positive integer
// number of floors. A tower block is represented with "*" character.

function towerBuilder(floors) {
    let space = null
    let star = null
    const tower = [];
    for (let i = 1; i <= floors; i++) {
        space = " ".repeat(floors - i);
        star = "*".repeat((2 * i) - 1);
        tower.push(`${space}${star}${space}`);
    }
    return tower;
}

console.log(towerBuilder(5));

