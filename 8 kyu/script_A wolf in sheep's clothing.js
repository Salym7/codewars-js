'use strict'

// Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at
// the front of the queue which is at the end of the array:

const warnTheSheep = (queue) => {
    if (queue[queue.length - 1] === 'wolf') return "Pls go away and stop eating my sheep"
    const wolfIndex = queue.indexOf('wolf')
    return `Oi! Sheep number ${queue.length - wolfIndex - 1}! You are about to be eaten by a wolf!`
}

console.log(warnTheSheep(["sheep", "sheep", "sheep", "wolf", "sheep","sheep"]));