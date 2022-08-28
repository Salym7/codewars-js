function betterThanAverage(classPoints, yourPoints) {
    const sumPoint = classPoints.reduce((acc, current) => acc + current, 0);
    const averagePoint = sumPoint / classPoints.length
    if (yourPoints > averagePoint) return true
    return false
}

array = [50, 60, 90, 50]
myPoints = 70
console.log(betterThanAverage(array, myPoints));

// There was a test in your class and you passed it. Congratulations!
//     But you're an ambitious person. You want to know if you're better than the average student in your class.
//
// You receive an array with your peers' test scores. Now calculate the average and compare your score!
//
// Return True if you're better, else False!
// Note:
//
// Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!
