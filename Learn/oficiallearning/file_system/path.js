'use strict'
const { join, parse, basename, dirname, extname } = require('path')

console.log('current filename', __filename) // /Users/valdas/mano/nodejs/Learn/oficiallearning/file_system/path.js
console.log('current dirname', __dirname) ///Users/valdas/mano/nodejs/Learn/oficiallearning/file_system

console.log('out file:', join(__dirname, 'out.txt')) // /Users/valdas/mano/nodejs/Learn/oficiallearning/file_system/out.txt
console.log('filename parsed:', parse(__filename)) // filename parsed: {
                                                    //     root: '/',
                                                    //     dir: '/Users/valdas/mano/nodejs/Learn/oficiallearning/file_system',
                                                    //     base: 'path.js',
                                                    //     ext: '.js',
                                                    //     name: 'path'
                                                    //   }

console.log('filename basename:', basename(__filename)) //path.js
console.log('filename dirname:', dirname(__filename)) // /Users/valdas/mano/nodejs/Learn/oficiallearning/file_system
console.log('filename extname:', extname(__filename)) //.js