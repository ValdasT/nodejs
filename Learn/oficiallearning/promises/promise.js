// const { readFile } = require('fs').promises
// const files = Array.from(Array(3)).fill(__filename)
// const print = (data) => {
//     console.log(Buffer.concat(data).toString())
// }

// const readers = files.map((file) => readFile(file))

// Promise.all(readers)
//     .then(print)
//     .catch(console.error)


// const { readFile } = require('fs').promises
// const files = [__filename, 'not a file', __filename]
// const print = (results) => {
//     results
//         .filter(({ status }) => status === 'rejected')
//         .forEach(({ reason }) => console.error(reason))
//     const data = results
//         .filter(({ status }) => status === 'fulfilled')
//         .map(({ value }) => value)
//     const contents = Buffer.concat(data)
//     console.log(contents.toString())
// }

// const readers = files.map((file) => readFile(file))

// Promise.allSettled(readers)
//     .then(print)
//     .catch(console.error)


const { readFile } = require('fs').promises
const files = Array.from(Array(3)).fill(__filename)
const print = (contents) => {
  console.log(contents.toString())
}

async function run () {
  const readers = files.map((file) => readFile(file))
  const data = await Promise.all(readers)
  print(Buffer.concat(data))
}

run().catch(console.error)