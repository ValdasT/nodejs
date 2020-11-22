'use strict'
// process.stdin.pipe(process.stdout)
const { pipeline } = require('stream');


'use strict'
console.log('initialized')
const { Transform } = require('stream')

let transforToUpperCase = new Transform({
    transform(chunk, enc, cb) {
        cb(null, chunk.toString().toUpperCase())
    }
})

pipeline(
    process.stdin,
    transforToUpperCase,
    process.stdout,
    (err) => {
      if (err) {
        console.error('Pipeline failed.', err);
      } else {
        console.log('Pipeline succeeded.');
      }
    }
  );


// process.stdin.pipe(transforToUpperCase).pipe(process.stdout)