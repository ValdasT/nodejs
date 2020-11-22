
// make Jest work with nodes setTimeout instead of overriding it!!!!!!!!!!!!
global.setTimeout = require('timers').setTimeout
const store = require('./store');
  
test('throw when inputs are not string', async () => {
    try {
        let result = await store(5);
        expect(result === undefined).toBe(true)
    } catch (err) {
        expect(err).toStrictEqual(Error('input must be a buffer'))
        
    }
})

test('return id', async () => {
    try {
        let buff = Buffer.alloc(5)
        let data = await store(buff)
        expect(data.id.length).toBe(4)
        expect(data.id.length === 4).toBeTruthy()
    } catch (err) {
        expect(err === null).toBe(true)
    }
})