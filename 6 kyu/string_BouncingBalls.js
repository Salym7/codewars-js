'use strict'

// A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
//
// He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
//
// His mother looks out of a window 1.5 meters from the ground.
//
// How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?

const bouncingBall = (h, bounce, window) => {
    if (!h || !bounce || bounce >= 1 || bounce <= 0  || !window) return -1
    let count = 0
    while (h > window){
        h = h * bounce
        count +=2
    }
    return count -1
}

console.log(bouncingBall(3, 0.66, 1.5));