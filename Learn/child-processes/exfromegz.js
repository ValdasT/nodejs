const { exec } = require('child_process');
const process = require('process');
const path = require('path')

// exec('pwd', {
//   cwd: '../'
// }, function (error, stdout, stderr) {
//     console.log(`Starting directory: ${process.cwd()}`);
//         try {
//             console.log(stdout);
//       process.chdir('../');
//       console.log(`New directory: ${process.cwd()}`);
//     } catch (err) {
//       console.error(`chdir: ${err}`);
//     }
//   // work with result
// });

// var exec = require('child_process').exec;

console.log(`Starting directory: ${process.cwd()}`);
exec('pwd', { cwd: '../' }, function (error, stdout, stderr) {
    if (error) {
        console.error('[fncExec] sh stderr', stderr);
        return;
    } else {
        console.log(stdout);
    }
});

