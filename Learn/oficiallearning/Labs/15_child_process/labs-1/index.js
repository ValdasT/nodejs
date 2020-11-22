'use strict'

const { spawn, execSync, spawnSync } = require("child_process");

function exercise(myEnvVar) {
  
  // return spawnSync(process.argv[0], ['child.js'], {
  //   env: { MY_ENV_VAR: myEnvVar }
  // })

  return execSync(process.argv[0], 'child.js', {
    env: { MY_ENV_VAR: myEnvVar }
  })


  // const sp = spawn(process.execPath, ['-p', 'process.env'], {
  //   env: {MY_ENV_VAR: myEnvVar}
  // })
   
  // return sp.stdout.pipe(process.stdout)
  // console.log('total var::', Object.keys(process.env).length)
  
  // TODO return a child process with
  // a single environment variable set 
  // named MY_ENV_VAR. The MY_ENV_VAR 
  // environment variable's value should 
  // be the value of the myEnvVar parameter 
  // passed to this exercise function
  // return require('child_process').spawnSync(process.argv[0], ['child.js'])
}

module.exports = exercise
