'use strict'
const { promisify } = require('util')

const print = (err, contents) => { 
  if (err) console.error(err)
  else console.log(contents) 
}

const opA = (cb) => {
  setTimeout(() => {
    cb(null, 'A')
  }, 500)
}

const opB = (cb) => {
  setTimeout(() => {
    cb(null, 'B')
  }, 2500)
}

const opC = (cb) => {
  setTimeout(() => {
    cb(null, 'C')
  }, 125)
}


const run = () => {
  opA((err, data) => {
    print(err, data)
    opB((err, data) => {
      print(err, data)
      opC((err, data) => {
        print(err, data)
      })
    })
  })
}


// let promiseA = promisify(opA);
// let promiseB = promisify(opB);
// let promiseC = promisify(opC);
 
// async function run() {
//   print(0, await promiseA());
//   print(0, await promiseB());
//   print(0, await promiseC());
// }

run()
