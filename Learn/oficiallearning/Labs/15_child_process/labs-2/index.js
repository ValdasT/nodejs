'use strict'

const { spawn } = require('child_process')

function exercise (command, args) {
const sp = spawn(
    process.execPath,
    [
     '-e',
     `console.error('err output'); process.stdin.pipe(process.stdout)`
    ],
    { stdio: ['ignore', 'pipe', 'inherit'] }
  )
  // sp.stdout.read()
  // // sp.stdin.pipe(process.stdout)
  // sp.stdin.write('this input will become output\n')
  // sp.stdin.end()
  
// sp.stdout.pipe(process.stdin)
// sp.stderr.pipe(process.stderr)
// sp.stdin.end()
return sp(command, args)
}

// has no ability to read STDIN
// redirects its STDERR to the parent process' STDERR
// exposes STDOUT as a readable stream

module.exports = exercise