'use strict'

// Your task is to write a function that takes a string and return a new string with all vowels removed.

const disemvowel = str => {
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i].toLowerCase())) continue;
        newStr += str[i];
    }
    return newStr;
}

console.log(disemvowel('This website is for losers LOL!'));