'use strict'
const prefixer = (a) => {
    if (typeof a === "number") {
        return (b) => {
            if(typeof b === "number")
            return a % b
         } 
    }
    
}

const first = prefixer(5)
const second = prefixer(9)
console.log(first(2)) // prints 'Hello Dave'
console.log(first(4)) // prints 'Hello Annie'
console.log(second(5)) // prints 'Goodbye Dave'