'use strict'
const assert = require('assert')
const buffer = Buffer.alloc(1024)
// Buffer.allocUnsafe(10)
console.log(buffer)

for (const byte of buffer) assert.equal(byte, buffer[0])
console.log('passed!')
