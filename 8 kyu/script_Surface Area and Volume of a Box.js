'use strict'

// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
    const area = width * height * 2 + height * depth * 2 + width * depth * 2
    const volume = width * height * depth
    return [area, volume]
}

console.log(getSize(4, 2, 6));
