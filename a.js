const fs = require('fs');

// fs.readFile('./x.txt', 'utf8', (err, str) => {
//     console.log(err, str);
// });

function read(filename) {
    // let result = fs.readFileSync(filename, 'utf8');
    let str = fs.readFile(filename, 'utf8', (err, str) => {
        if(err) return err + '';
        return str;
    });
    return str;
}

console.log(read('./x.txt'));
