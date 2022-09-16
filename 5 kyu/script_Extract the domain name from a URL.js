'use strict'

// Write a function that when given a URL as a string, parses out just the
// domain name and returns it as a string. For example:

const domainName = (url) => {
    const arr = url.split(/[:/.]/).filter(n=>n)
    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] !== 'www' && arr[i] !== 'http'&& arr[i] !== 'https') return arr[i]
    }
}
console.log(domainName("http://www.zombie-bites.com"));

// function domainName(url){
//     return  url.replace('http://', '')
//         .replace('https://', '')
//         .replace('www.', '')
//         .split('.')[0];
// }