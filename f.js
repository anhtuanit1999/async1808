const request = require('request');

function congPromise(a, b) {
    return new Promise((resovle, reject) => {
        if(typeof a != 'number' || typeof b != 'number') {
            return reject(new Error('Type error!'));
        }
        const url = `http://localhost:3000/tinh/CONG/${a}/${b}`;
        request(url, (err, res, body) => {
            if(err) reject(err);
            else resovle(body);
        });
    });
}

function nhanPromise(a, b) {
    return new Promise((resovle, reject) => {
        if(typeof a != 'number' || typeof b != 'number') {
            return reject(new Error('Type error!'));
        }
        const url = `http://localhost:3000/tinh/NHAN/${a}/${b}`;
        request(url, (err, res, body) => {
            if(err) reject(err);
            else resovle(body);
        });
    });
}

function chiaPromise(a, b) {
    return new Promise((resovle, reject) => {
        if(typeof a != 'number' || typeof b != 'number') {
            return reject(new Error('Type error!'));
        }
        if(b === 0) return reject(new Error('Chia cho 0'));
        const url = `http://localhost:3000/tinh/CHIA/${a}/${b}`;
        request(url, (err, res, body) => {
            if(err) reject(err);
            else resovle(body);
        });
    });
}

// congPromise(2, 3)
// .then(ab => nhanPromise(+ab, 5))
// .then(abh => chiaPromise(+abh, 2))
// .then(res => console.log(res))
// .catch(err => console.log(err.message));

function tinhDienTichhinhThang(a, b, h) {
    return congPromise(a, b)
    .then(tong => nhanPromise(+tong, h))
    .then(tich => chiaPromise(+tich, 2))
}

// Promise.all([congPromise(2, 3), chiaPromise(6, 3)])
// .then(arrPr => nhanPromise(+arrPr[0], +arrPr[1]))
// .then(res => console.log(res));

// tinhDienTichhinhThang(4, 5, 6)
// .then(res => console.log(res))
// .catch(err => console.log(err.message));

async function tinhDienTich(a, b, h) {
    try {
        const tong = await congPromise(a, b);
        const tich = await nhanPromise(+tong, h);
        const resutl = await chiaPromise(+tich, 2);
        return Promise.resolve(resutl);
    } catch (e) {
        //return Promise.reject(e);
        throw new Error(e);
    }
}

tinhDienTich('2', 3, 2)
.then(res => console.log(res))
.catch(err => console.log(err.message));