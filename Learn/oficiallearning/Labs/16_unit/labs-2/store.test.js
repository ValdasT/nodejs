const store = require('./store');
test('throw when inputs are not string', (done) => {
    store(5, (err, data) => {
        expect(data === undefined).toBe(true)
        expect(err).toStrictEqual(Error('input must be a buffer'))
        done()
    })
})

test('return id', (done) => {
    let buff = Buffer.alloc(5)
    store(buff, (err, data) => {
        expect(err === null).toBe(true)
        expect(data.id.length).toBe(4)
        expect(data.id.length === 4).toBeTruthy()
        done();
    })
})
