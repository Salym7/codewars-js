'use strict'

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

const quarterOf = (month) => {
    if (month <=3) return 1;
    if (month <=6) return 2;
    if (month <=9) return 3;
    return 4
}

// const quarterOf = month => Math.ceil(month / 3);
