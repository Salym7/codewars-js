'use strict'

// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates
// all the odd-indexed characters of S with all the even-indexed characters of S, this process
// should be repeated N times.

function encrypt(text, n) {
    let result = text
    for (let i = 0; i < n; i++) {
        const arr = result.split('')
        let odd = arr.filter((item, index) => index % 2 !== 0)
        let even = arr.filter((item, index) => index % 2 === 0)
        result = [...odd, ...even].join('')
    }
    return result
}

function decrypt(encryptedText, n) {
    if (!encryptedText || n <= 0) return encryptedText;
    const ans = new Array(encryptedText.length);
    while (n--) {
        let j = 0;
        for (let i = 1; i < ans.length; i += 2) {
            ans[i] = encryptedText[j++];
        }
        for (let i = 0; i < ans.length; i += 2) {
            ans[i] = encryptedText[j++];
        }
        encryptedText = ans.join('');
    }
    return encryptedText;
}

console.log(encrypt("012345", 2)); //
console.log(decrypt("304152", 2));

