'use strict'
const os = require('os')

console.log('platform', os.platform())
console.log(process.platform);
console.log('type', os.type())

// console.log(process.platform);
// process.exit(1);

let run = () => {
    let sysName = process.platform;
    if (sysName === 'darwin') {
        process.exit(1);
    } else if (sysName === 'linux') {
        process.exit(2);
    } else if (sysName === 'win32') {
        process.exit(3);
    } else {
        process.exit(0);
    }

}
run()
// process.exitCode = 1
// 'aix' – IBM AIX
// 'darwin' – macOS
// 'freebsd' – FreeBSD
// 'linux' – Linux
// 'openbsd' – OpenBSD
// 'sunos' – Solaris / Illumos / SmartOS
// 'win32' – Windows
// 'android' – Android, experimental


// setInterval(() => {   
//     console.log(process.uptime()) // TODO output uptime of process
//     console.log(os.uptime()) // TODO output uptime of OS
//     console.log(os.totalmem()) // TODO output total system memory
//     console.log(process.memoryUsage().heapTotal) // TODO output total process memory (Heap used is total used memory, Resident Set Size is total used memory in RAM)
//     console.log(process.cpuUsage()); // process cpu usage
// },1000)



// 'use strict'
// setInterval(() => {
//   console.log('this interval is keeping the process open')
//   process.exitCode = 1
// }, 500)
// setTimeout(() => {
//   console.log('exit after this')
//   process.exit()
// }, 1750)

// process.on('exit', (code) => {
//   console.log('exiting with code', code)
//   setTimeout(() => {
//     console.log('this will never happen')
//   }, 1)
// })