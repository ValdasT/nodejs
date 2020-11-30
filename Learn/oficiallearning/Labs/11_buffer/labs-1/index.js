'use strict'
const assert = require('assert')
const buffer = Buffer.alloc(1024)
// Buffer.allocUnsafe(10)
console.log(buffer)

for (const byte of buffer) assert.equal(byte, buffer[0])
console.log('passed!')


// const buffer = Buffer.from('👀')
// const json = JSON.stringify(buffer)
// const parsed = JSON.parse(json)
// console.log(parsed) // prints { type: 'Buffer', data: [ 240, 159, 145, 128 ] }
// console.log(Buffer.from(parsed.data)) // prints <Buffer f0 9f 91 80>