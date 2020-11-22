'use strict'
const fs = require('fs')
const { Readable, Writable } = require('stream')
const readable = fs.createReadStream(__filename)
readable.on('data', (data) => { console.log(' got data', data) })
readable.on('end', () => { console.log(' finished reading') })

const writable = fs.createWriteStream('./out')
writable.on('finish', () => { console.log('finished writing') })
writable.write('A\n')
writable.write('B\n')
writable.write('C\n')
writable.end('nothing more to write')

const readableString = Readable.from(['some', 'data', 'to', 'read'])
readableString.on('data', (data) => { console.log('got data', data) })
readableString.on('end', () => { console.log('finished reading') })

const createWriteStream = (data) => {
  return new Writable({
    objectMode: true,
    write (chunk, enc, next) {
      data.push(chunk)
      next()
    }
  })
}
const data = []
const writable = createWriteStream(data)
writable.on('finish', () => { console.log('finished writing', data) })
writable.write('A\n')
writable.write(1)
writable.end('nothing more to write')