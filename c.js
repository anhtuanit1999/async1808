const request = require('request');

function cong(a, b, cb) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return cb(new Error('Type error!'));
    }
    const url =`http://localhost:3000/tinh/CONG/${a}/${b}`;
    request(url, (err, res, body) => {
        cb(err, body);
    });
}

function nhan(a, b, cb) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return cb(new Error('Type error!'));
    }
    const url =`http://localhost:3000/tinh/NHAN/${a}/${b}`;
    request(url, (err, res, body) => {
        cb(err, body);
    });
}

function chia(a, b, cb) {
    if(typeof a !== 'number' || typeof b !== 'number') {
        return cb(new Error('Type error!'));
    }
    if(b ===  0) return cb(new Error('Divide by zero!'));

    const url =`http://localhost:3000/tinh/CHIA/${a}/${b}`;
    request(url, (err, res, body) => {
        cb(err, body);
    });
}

chia(9, 10, (err , res) => {
    if(err) console.log(err.message);
    else console.log(res);
});

// request('http://localhost:3000/tinh/CONG/4/5', (err, res, body) => {
//     console.log(body);
// });