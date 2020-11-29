'use strict'
const { EventEmitter } = require('events')
// The prependListener method can be used to inject listeners into the top position:

process.nextTick(console.log, 'passed!')

const ee = new EventEmitter()

ee.on('error', (err) => {
    console.log(err.message);
});

ee.emit('error', Error('timeout'))

// const add = (a, b) => { console.log(a + b) }
// ee.addListener('add', add)
// ee.emit('add', 7, 6)
// ee.removeListener('add', add)
// ee.removeAllListeners('add')
// ee.emit('add', 7, 6)


// ee.once('test', (a) => {
//     console.log("test event - " + a);
// });
// ee.emit('test', 1)
// ee.emit('test', 2)
// ee.emit('test', 3)