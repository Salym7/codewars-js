'use strict'

// There is a bus moving in the city, and it takes and drop some people
// in each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of
// each pair represent number of people get into bus (The first item)
// and number of people get off the bus (The second item) in a bus stop.

// Your task is to return number of people who are still in the bus after
// the last bus station (after the last array). Even though it is the last bus
// stop, the bus is not empty and some people are still in the bus, and
// they are probably sleeping there :D

const number = (busStops) => busStops.reduce((acc, num) => acc + num[0] - num[1],0)

console.log(number([[10, 0], [3, 5], [5, 7]]));

// const number = (busStops) => busStops.reduce((rem, [on, off]) => rem + on - off, 0);