'use strict'
const { spawnSync, spawn } = require('child_process')
// const result = spawnSync(
//   process.execPath,
//   ['-e', `console.log('answer!!!!!!')`]
// )
// console.log(result.stdout.toString())


// process.env.A_VAR_WE = 'JUST SET'
// const sp = spawn(process.execPath, ['-p', 'process.env'])
// sp.stdout.pipe(process.stdout)


process.env.A_VAR_WE = 'JUST SET'

const sp2 = spawn(process.execPath, ['-p', 'process.env'], {
  env: {SUBPROCESS_SPECIFIC: 'ENV VAR'}
})
sp2.stdout.pipe(process.stdout)
console.log(process.env);

//  spawnSync(process.argv[0], ['spawn.js'], {
//     env: { MY_ENV_VAR: 'ffff' }
// })
  