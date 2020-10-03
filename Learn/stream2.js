const { PassThrough, pipeline, Readable } = require("stream");
const fs = require("fs");

const passThrough = new PassThrough();


const inputStream = fs.createReadStream("./stream-moredata.txt");
const outputStream = fs.createWriteStream("./out.txt");
const writableStream = fs.createWriteStream("./out2.txt");

// const content = [
//   'Hi',
//   'From',
//   'Array',
// ];

// const origin = Readable.from(content);

// origin.on('data', (chunk) => {
//   console.log(chunk);
// });

writableStream.on('open', () => {
    console.log('Event: open');
  });
  
  writableStream.on('ready', () => {
    console.log('Event: ready');
  });
  
  writableStream.on('finish', () => {
    console.log('Event: finish');
  });
  
  writableStream.on('close', () => {
    console.log('Event: close');
  });
  
  writableStream.on('error', () => {
    console.log('Event: error');
  });

//we can pass {flags: "a"} to create the write stream in append mode.
// const outputStream = fs.createWriteStream("file.txt", { flags: "a" });

//errors handling
inputStream.on('error', function (err) {
    console.log(err.stack);
});

inputStream.on('data', (chunk) => {
    console.log(chunk.toString());
  });

outputStream.on('error', function (err) {
    console.log(err.stack);
});

passThrough.on("error", err => {
    console.error("passThrough encountered an error:", err);
});


//connect 2 streams
// inputStream.pipe(passThrough).pipe(outputStream);
inputStream.pipe(outputStream);

// process.stdin.pipe(process.stdout)


//==============Write from console and save to file ==============
// const outputStreamFromConsole = fs.createWriteStream("./files/textFromConsole.txt");

// process.stdin.pipe(outputStreamFromConsole)

