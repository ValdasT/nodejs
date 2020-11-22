'use strict'

const { spawn } = require('child_process')

function exercise (command, args) {
  // return spawn(command, args)
  const sp = spawn(
    process.execPath,
    [
     '-e',
     `console.error('err output'); process.stdout.pipe(process.stdin)`
    ],
    { stdio: ['pipe', 'inherit', 'inherit'] }
  )
  
//   sp.stdout.pipe(process.stdin)
// sp.stderr.pipe(process.stderr)
// sp.stdin.end()
  return sp;
}

module.exports = exercise