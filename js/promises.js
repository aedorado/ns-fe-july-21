// const promise = new Promise(() => {
//     // long running task goes here
// });
// console.log(promise);

// pending - ongoing
// fulfilled - succes
// rejected - failed

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(10);
//     }, 5000);
// });
// console.log(myPromise);
// myPromise.then(
//     (data) => console.log(data),
//     (err) => console.log(err)
// );
// console.log('After then');

// const getData = (num) => {
//     return new Promise((resolve, reject) => {
//         typeof num === 'number' ? resolve(num * 2) : reject(NaN);
//     });
// }


// getData(2) // prom<4>
// .then((data) => getData(data), err => console.log(err)) // prom<8>
// .then((data1) => getData(data1)) // prom<16>
// // .then((data2) => console.log(data2)); // console.log(16)

let getPuzzle = () => new Promise((resolve, reject) => {
    if (true) {
        resolve('err');
    } else {
        reject('err');
    }
});

// getPuzzle().then((x) => {
//     console.log(x);
// }, err => {
//     console.log(err);
// })

// async, await operators
// a async function always retunrs a promise
const f = async () => {
    return 12;
};
// console.log(f());

// f().then((data) => console.log(data));

const getData = (x) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof x === 'number' ? resolve(x * 2) : reject('Give a numer');
    }, 1000);
});

// await operator can be used only with an async function
const processFn = async () => {
    let data = await getData(2);
    data = await getData(data);
    data = await getData(data);
    console.log(data);
    console.log('done');
}

processFn();
// getData(2)
// .then((data) => getData(data))
// .then((data) => getData(data))
// .then((data) => console.log(data));

// console.log('done');











// getData(2).then(
//     (data) => {
//         getData(data).then(
//             (data1) => getData(data1).then
//                 ((data2) => console.log(data2)
//             ), 
//             (err) => console.log(err)
//         );
//     },
//     (err) => {
//         console.log(err);
//     }
// );

