const request = require('request');

function getIP(cb) {
    request('http://ip.jsontest.com/', (err, res, body) => {
        cb(err, body);
    });
}

getIP((err, ip) => {
    if(err) console.log(err.message);
    else console.log(ip);
});
