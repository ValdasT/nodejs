const fetch = require('node-fetch');

const myTimer = (ms) => {
    return new Promise((resolve, reject) => {
        if (ms === undefined) {
            reject(new Error('ms is required'))
        } else {
            setTimeout(() => {
                resolve(ms);
            }, ms)
        }
    })
}

const myTimerWithCallBack = (ms, callback) => {
        if (ms === undefined) {
            callback(new Error('ms is required from callback'))
        } else {
            setTimeout(() => {
                callback(null, ms);
            }, ms)
        }
}

const getUserInfo = () => {
    return new Promise((resolve, reject) => {
        fetch("http://jsonplaceholder.typicode.com/users/2")
            .then(response => { console.log(response); response.json() })
            .then(info => resolve(info))
            .catch(err => reject(err))
    })
};


let testFunction = async () => {
    try {
        const res = await myTimer(2000);
        console.log(`waited for ${res} s.`);

        // const res2 = await myTimer();
        // console.log(res2);

        myTimerWithCallBack(2000, (err,result) => {
            if (err) throw new Error(err)
            console.log(result);
        })

        const user = await getUserInfo();
        console.log(user);
    } catch (err) {
        console.log(err);
    }

};


testFunction();


