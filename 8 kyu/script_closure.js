'use strict'

function clous() {
    return {
       login: 'artur',
       pass: "1234"
   }
}

function foo() {
    const obj = clous()
    return {
        getLogin() {
            return obj.login
        },
        getPass() {
            return obj.pass
        },
    }
}

const f2 = foo()
const f3 = foo()

console.log(f2.getPass());
console.log(f2.getLogin());
