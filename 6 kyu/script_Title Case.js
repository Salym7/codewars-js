'use strict'

// Write a function that will convert a string into title case, given an optional list of
// exceptions (minor words). The list of minor words will be given as a string with each
// word separated by a space. Your function should ignore the case of the minor
// words string -- it should behave in the same way even if the case of the minor word string is changed.

function titleCase(title, minorWords) {
    let minor = typeof minorWords !== "undefined" ? minorWords.toLowerCase().split(' ') : [];
    return title.toLowerCase().split(' ').map(function(v, i) {
        if(v !== "" && ( (minor.indexOf(v) === -1) || i === 0)) {
            v = v.split('');
            v[0] = v[0].toUpperCase();
            v = v.join('');
        }
        return v;
    }).join(' ');
}

console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'));
