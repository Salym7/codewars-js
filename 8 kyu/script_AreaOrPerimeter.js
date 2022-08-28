'use strict'

const areaOrPerimeter = (l, w) => l === w ? l * w : (l + w) * 2;

console.log(areaOrPerimeter(5, 6));

// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.