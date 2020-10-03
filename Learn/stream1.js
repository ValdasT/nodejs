const fs = require('fs');
const { Transform, pipeline } = require('stream');


const readStream = fs.createReadStream(`${__dirname}/stream-moredata.txt`);
const writeStream = fs.createWriteStream(`${__dirname}/ex1-2.txt`);

const myTransform = new Transform({
    transform(chunk, encoding, callback){
        callback(null, chunk.toString().toUpperCase());
    }
})

pipeline(readStream, myTransform, writeStream, err => {
    if (err) {
      console.log("Pipeline encountered an error:", err);
    } else {
        console.log("Pipeline ended");
    }
});
  
// readStream.pipe(myTransform).pipe(writeStream);

// // All events examples.
// readStream.on('open', () => console.log(`Event originFile: open`));
// readStream.on('ready', () => console.log('Event originFile: ready'));
// readStream.on('data', (chunk) => console.log(`Event originFile: open ${chunk.toString()}`));
// readStream.on('finish', () => console.log('Event originFile: finish'));
// readStream.on('close', () => console.log('Event originFile: close'));
// readStream.on('error', () => console.log('Event originFile: error'));

// myTransform.on('end', () => console.log('Event myTransform: end'));
// myTransform.on('finish', () => console.log('Event myTransform: finish'));
// myTransform.on('data', (chunk) => console.log(`Event myTransform: open ${chunk.toString()}`));

// writeStream.on('open', () => console.log('Event destinationFile: open'));
// writeStream.on('ready', () => console.log('Event destinationFile: ready'));
// writeStream.on('finish', () => console.log('Event destinationFile: finish'));
// writeStream.on('close', () => console.log('Event destinationFile: close'));
// writeStream.on('error', () => console.log('Event destinationFile: error'));
