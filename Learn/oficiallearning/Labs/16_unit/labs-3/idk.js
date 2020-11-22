const store = require('./store');

const test = async () => {
    let buff = Buffer.alloc(5)
    try {
        let data = await store(buff);
        console.log(data.id);
    } catch (err) {
        console.log(err);
    }
}

test();