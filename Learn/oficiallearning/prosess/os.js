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