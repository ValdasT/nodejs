'use strict'
const { readdirSync, readdir, statSync } = require('fs')
const { readdir: readdirProm } = require('fs').promises

try {
  console.log('sync', readdirSync(__dirname))
} catch (err) {
  console.error(err)
}

readdir(__dirname, (err, files) => {
  if (err) {
    console.error(err)
    return
  }
  console.log('callback', files)
})

async function run () {
  const files = await readdirProm(__dirname)
  console.log('promise', files)
}

run().catch((err) => {
  console.error(err)
})

// =============================================

const files = readdirSync('.')

for (const name of files) {
  const stat = statSync(name)
  const typeLabel = stat.isDirectory() ? 'dir: ' : 'file: '
  console.log(typeLabel, name)
}

for (const name of files) {
    const stat = statSync(name)
    const typeLabel = stat.isDirectory() ? 'dir: ' : 'file: '
    const { atime, birthtime, ctime, mtime, size } = stat
    console.group(typeLabel, name)
    console.log('size:', size)
    console.log('atime:', atime.toLocaleString())
    console.log('ctime:', ctime.toLocaleString())
    console.log('mtime:', mtime.toLocaleString())
    console.log('birthtime:', birthtime.toLocaleString())
    console.groupEnd()
    console.log()
  }