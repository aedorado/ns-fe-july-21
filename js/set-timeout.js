
let t = setInterval(function() {
    console.log('Interval occured');
}, 3000);
console.log(t);

setTimeout(function() {
    clearInterval(t);
    console.log('10s occurs');
}, 10000)

// console.log(1);
// setTimeout(function() {
//     console.log('after timeout');
// }, 5000);
// console.log(2);
