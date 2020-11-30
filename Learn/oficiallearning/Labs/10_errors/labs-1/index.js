'use strict'
const assert = require('assert')

function parseUrl(str) {
  try {
    const parsed = new URL(str)
    return parsed
  } catch(err){
    return null
  }
}

assert.doesNotThrow(() => { parseUrl('invalid-url') })
assert.equal(parseUrl('invalid-url'), null)
assert.deepEqual(
  parseUrl('http://example.com'), 
  new URL('http://example.com')
)
console.log('passed!')


// function doTask (amount) {
//   if (typeof amount !== 'number') throw new TypeError('amount must be a number')
//   if (amount <= 0) throw new RangeError('amount must be greater than zero')
//   if (amount % 2) throw new OddError('amount')
//   return amount / 2
// }

// try {
//   const result = doTask(4)
//   console.log('result', result)
// } catch (err) {
//   if (err instanceof TypeError) {
//     console.error('wrong type')
//   } else if (err instanceof RangeError) {
//     console.error('out of range')
//   } else if (err instanceof OddError) {
//     console.error('cannot be odd')
//   } else {
//     console.error('Unknown error', err)
//   }
// }


// doTask(3)
// doTask('here is some invalid input')
// doTask(-1)