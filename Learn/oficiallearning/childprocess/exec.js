'use strict'
const { execSync, exec, spawnSync} = require('child_process')

// const output = execSync(
//   `node -e "console.log('subprocess stdio output')"`
// )
// console.log(output.toString())
// //=================================

const cmd = process.platform === 'win32' ? 'dir' : 'ls'
const output2 = execSync(cmd);
console.log(output2.toString())

// //=================================
// try {
//     let result = execSync(`${process.execPath} -e "console.log('kaboom')"`)
//     console.log(result.toString());
//   } catch (err) {
//     console.error('CAUGHT ERROR:', err)
//   }

// //=================================

// exec(
//     `${process.execPath} -e "console.log('A');console.error('B')"`,
//     (err, stdout, stderr) => {
//       console.log('err', err)
//       console.log('subprocess stdout: ', stdout.toString())
//       console.log('subprocess stderr: ', stderr.toString())
//     }
// )
  
//==================================
// try {
//     let result = execSync(`node -e "console.log(process.env);process.env={}; process.env.MY_ENV_VAR='is set'; console.log(process.env)"  `)
//     console.log(result.toString());
// } catch (err) {
//     console.error('CAUGHT ERROR:', err)
// }

//==================================
try {
    let result = execSync(`node -e "process.chdir('./zone'); console.log(process.cwd())"  `)
    console.log(result.toString());
} catch (err) {
    console.error('CAUGHT ERROR:', err)
}

// const result = spawnSync(
//   process.execPath,
//   ['-e', `process.chdir('../'); console.log(process.cwd())`]
// )
// console.log(result.stdout.toString())

// console.log(`Starting directory: ${process.cwd()}`);
// exec('pwd', { cwd: '../' }, function (error, stdout, stderr) {
//     if (error) {
//         console.error('err: ', stderr);
//         return;
//     } else {
//         console.log(stdout);
//     }
// });

// console.log(`Starting directory: ${process.cwd()}`);
let test = execSync('pwd', { cwd: './zone' })
        console.log(test.toString());
    
