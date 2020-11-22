'use strict'
const { join } = require('path')
const { readFileSync, writeFileSync, readdirSync, statSync, watch } = require('fs')

// const contents = readFileSync(__filename)
// console.log(contents)

//encoding
// const contents = readFileSync(__filename, {encoding: 'utf8'})
// console.log(contents)



const contents = readFileSync(__filename, {encoding: 'utf8'})
writeFileSync(join(__dirname, 'out.txt'), contents.toUpperCase())

try {
    console.log('sync', readdirSync(__dirname))
  } catch (err) {
    console.error(err)
  }


const files = readdirSync('.')
for (const name of files) {
  const stat = statSync(name) // get metadata about file
  const typeLabel = stat.isDirectory() ? 'dir: ' : 'file: '
  console.log(typeLabel, name)
}

watch('.', (evt, filename) => {
    console.log(evt, filename)
  })