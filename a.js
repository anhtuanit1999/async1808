const fs = require('fs');

// fs.readFile('./x.txt', 'utf8', (err, str) => {
//     console.log(err, str);
// });

function read(filename) {
    // let result = fs.readFileSync(filename, 'utf8');
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, str) => {
            if(err) reject(err);
            else resolve(str);
        });
    });
}

read('./x.txt')
.then(str => console.log(str))
.catch(err => console.log(err.message));
