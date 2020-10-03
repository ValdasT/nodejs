
const fs = require('fs');

// const getFileByName = (fileName) => {
//   fs.open(`${__dirname}/testFiles/${fileName}`, 'r', (errOpen, fd) => {
//     if (errOpen) throw errOpen;
//     console.info('[getFileByName] fd', fd);
//     fs.close(fd, (errClose) => {
//       if (errClose) throw errClose;
//     });
//   });
// };

// getFileByName('file.json');
// getFileByName('file.txt');
// getFileByName('file-nofound.txt');

// ====================================
// const getFileStatByName = (fileName) => {
//     fs.open(`${__dirname}/testFiles/${fileName}`, 'r', (errOpen, fd) => {
//       if (errOpen) throw errOpen;
//       fs.fstat(fd, (errStat, stat) => {
//         if (errStat) throw errStat;
//         console.info(`Stat fileName ${fileName}`, stat);
//         fs.close(fd, (errClose) => {
//           if (errClose) throw errClose;
//         });
//       });
//     });
//   };

//   getFileStatByName('file.json');

// ====================================
// const detailsFolder = () => {
//     const details = fs.opendirSync(`${__dirname}/testFiles/`);
//     console.log('[detailsFolder] details', details);
//   };

//   detailsFolder();

//   const detailsFile = (pathName) => {
//     const details = fs.openSync(`${__dirname}/testFiles/${pathName}`);
//     console.log('[detailsFile] details', details);
//   };

//   detailsFile('file1.txt');
// ====================================

// const contentFolder = () => {
//     fs.readdir(`${__dirname}/testFiles/`, (err, content) => {
//         if (err) throw err;
//         console.log('[contentFolder]', content);
//     });
//     try {
//         let test = fs.readdirSync(`${__dirname}/testFiles/`);
//         test.forEach(e => {
//             let file = Buffer.from(fs.readFileSync(`${__dirname}/testFiles/${e}`)).toString();
//             console.log(file);
//         })
//     } catch (err) {
//         console.error(err);
//     }

// };
// contentFolder();

// ====================================

// const textToAppendSync = 'This is the text to add inside a file empty';
// const textToAppendNewFileSync = 'This is the text to add inside a file new';

// const appendTextSync = (pathName, text) => {
//   try {
//     fs.appendFileSync(`${__dirname}/testFiles/${pathName}`, text);
//     console.info(`[appendTextSync] Text added inside ${pathName} file!`);
//   } catch (err) {
//     console.error(`[appendTextSync] Error adding text inside ${pathName} file!`, err);
//   }
// };
// appendTextSync('newFile.txt', textToAppendSync);
// appendTextSync('newFile.txt', textToAppendNewFileSync);

// ====================================

// const writeFile = (pathName) => {
//     try {
//       const stream = fs.createWriteStream(`${__dirname}/testFiles/${pathName}`);
//       stream.write('this is my text');
//       stream.on('open', () => {
//         console.log('[writeFile] open');
//       });
//       stream.on('error', (e) => {
//         console.log('[writeFile] error', e);
//       });
//     } catch (e) {
//       console.error('[writeFile]', e);
//     }
//   };
// writeFile('file-stream.txt');
  
// ====================================