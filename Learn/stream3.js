
// const fs  = require('fs');
// const { createGzip } = require ('zlib');
// const http = require ('http');

// Create server instance.
// const server = http.createServer();

// // Set listen function and set config.
// server.listen(3000);

// // Server Event when received and request http.
// server.on('request', (request, response) => {
//   console.log('👉 Server   | Request ⤵️');

//   // Create file zip from txt and return to download file.
//   fs.createReadStream(`${__dirname}/file.txt`)
//     .pipe(createGzip())
//     .pipe(response);

//   request.on('end', () => {
//     console.log('👀 Request  | End ⤵️');
//   });

//   request.on('error', (err) => {
//     request.end(err);
//   });
// });

 //        //arba

const fs = require('fs');
const express = require('express');

const app = express();

app.get('/download', (req, res, next) => {
    const filestream = fs.createReadStream(`${__dirname}/out.txt`)
    filestream.on('open', () => {
        // res.attachment("myFile.txt");  //download the file from browser
        filestream.pipe(res);
    })
    filestream.on('error', (err) => {
        next(err);
    })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))