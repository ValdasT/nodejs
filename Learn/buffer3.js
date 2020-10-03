const fs = require('fs');
const { pipeline, Readable } = require('stream');

const buff = Buffer.from('jajajajajajajsjdjadjadjadjadjajd');
const stream = Readable.from(buff.toString())
const writtableStream = fs.createWriteStream(`${__dirname}/buff.txt`)

console.log(buff.toString());
pipeline(stream, writtableStream, err => {
    if (err) {
        console.log(err);
    } else {
        console.log('done');
    }
})
