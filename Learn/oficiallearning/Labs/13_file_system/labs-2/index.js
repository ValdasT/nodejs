'use strict'
const assert = require('assert')
const { join, basename } = require('path')
const fs = require('fs')
const project = join(__dirname, 'project')
try { fs.rmdirSync(project, {recursive: true}) } catch (err) {}
const files = Array.from(Array(5), () => {
  return join(project, Math.random().toString(36).slice(2))
})
fs.mkdirSync(project)
for (const f of files) fs.closeSync(fs.openSync(f, 'w'))

const out = join(__dirname, 'out.txt')

function exercise() {
  const files = new Set(fs.readdirSync(join(__dirname, 'project')))
  let data = ''
  let arr = [];
  for (const file of files) {
    const filepath = join(project, file)
    const stat = fs.statSync(filepath)
    arr.push({ name: file, birth: stat.birthtimeMs })
  }
  arr.sort(function (a, b) {
    return a.birth - b.birth;
  });

  for (const file of arr) {
    if (data.length) {
      data +=`,${file.name}`
    } else {
      data +=`${file.name}`
    }
  }

  fs.writeFileSync(join(__dirname, 'out.txt'), data)
  // TODO read the files in the project folder
  // and write the to the out.txt file
}

exercise()
assert.deepStrictEqual(
  fs.readFileSync(out).toString().split(',').map((s) => s.trim()),
  files.map((f) => basename(f))
)
console.log('passed!')