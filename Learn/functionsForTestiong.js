const fetch = require('node-fetch');

const sum = (a, b) => {
    return a + b;
}

const getUserInfo = () => {
    return new Promise((resolve, reject) => {
        fetch("http://jsonplaceholder.typicode.com/users/2")
            .then(response => response.json())
            .then(info => resolve(info))
            .catch(err => reject(err))
    })
};

const myTimerWithCallBack = (ms, callback) => {
    if (ms === undefined) {
        callback(new Error('ms is required from callback'))
    } else {
        setTimeout(() => {
            console.log(ms);
            callback(null, ms);
        }, ms)
    }
}

module.exports = {
    getUserInfo,
    myTimerWithCallBack,
    sum
}