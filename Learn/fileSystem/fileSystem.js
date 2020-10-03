const fs = require('fs');
const path = require('path');

fs.writeFile(
    "./out.txt",
    "My path is relative to the current working directory! aka process.cwd()",
    (err) => {
        if (err) throw new Error(err);
        let text = fs.readFileSync("./out.txt", 'utf8');
        console.log(text);
    }
);

const config = JSON.parse(fs.readFileSync("./package-lock.json"));
console.log(config);

// __dirname current repository
fs.writeFile(
    path.join(__dirname, "/out2.txt"),
    "My path is relative to the directory this script inhabits!",
    (err) => {
        if (err) throw new Error(err);
    }
);

fs.readFile(
    path.join(__dirname, "/out2.txt"),
    'utf8',
    (err, data) => {
        if (err) throw new Error(err);
        console.log(data);
    }
);

//how to use __dirname with path
let folderLocation = path.join(__dirname, "../../out.txt")
console.log(folderLocation);