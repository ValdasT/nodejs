'use strict'
const { join, parse, basename, dirname, extname } = require('path')

console.log('current filename', __filename)
console.log('current dirname', __dirname)

console.log('out file:', join(__dirname, 'out.txt'))
console.log('filename parsed:', parse(__filename))
console.log('filename basename:', basename(__filename))
console.log('filename dirname:', dirname(__filename))
console.log('filename extname:', extname(__filename))