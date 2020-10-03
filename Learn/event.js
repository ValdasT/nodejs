const events = require('events');

const myEmitter = new events();

const f1 = () => {
    console.log('1 event occurred!');
}

const f2 = () => {
    console.log('2 event occurred!');
}

//prijungia eventus
myEmitter.on('eventOne', f1); // Register for eventOne
myEmitter.on('eventOne', f2); // Register for eventOne

myEmitter.emit('eventOne')

//================================================
const f3 = (code, msg) => {
    console.log(`Got ${code} and ${msg}`)
}

myEmitter.on('status', f3);
myEmitter.emit('status', 200, 'ok');
//================================================

//Atjungia eventa
myEmitter.off('eventOne', f1);
// myEmitter.removeListener('eventOne', f2);
myEmitter.emit('eventOne')

//================================================
// suskaiciuoja kiek eventu pajungtu
console.log(myEmitter.listenerCount('eventOne'));

//================================================
// prodo funkcija
console.log(myEmitter.rawListeners('eventOne'));

//================================================
//myEmitter.addListener ir myEmitter.on daro ta paty?
const f4 = () => {
    console.log('4 event occurred!');
}

myEmitter.addListener('eventOne', f4);
myEmitter.emit('eventOne')


console.log(__dirname)