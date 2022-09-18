'use strict'

const howMuchILoveYou = (nbPetals) => {
    const array = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all' ]
    let count = 0
    for (let i = 1; i < nbPetals; i++) {
        count +=1
        if (count === 6) count = 0
    }
    return array[count]
}
console.log(howMuchILoveYou(7));
