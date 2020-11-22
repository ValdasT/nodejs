const store = require('./store');

const test = () => {
    let buff = Buffer.alloc(5)
    store(buff, (err, data) => {
        console.log(data.id.length);
    })
}

test();
