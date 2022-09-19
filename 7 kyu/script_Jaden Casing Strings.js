'use strict'

// Your task is to convert strings to how they would be written by Jaden Smith.
// The strings are actual quotes from Jaden Smith,
// but they are not capitalized in the same way he originally typed them.

String.prototype.toJadenCase = function() {
    return this
        .split(" ")
        .map(i => i.replace(i[0], i[0].toUpperCase()))
        .join(" ");
};

String.prototype.toJadenCase = function () {
    return this.split(' ').
    map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
};