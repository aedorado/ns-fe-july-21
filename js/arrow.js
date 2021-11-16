
// function f(arg) {
//     return arg + 100;
// }

// let f = arg => arg + 100;

// let f = arg => arg + 100;
// let f = (name) => `Hello ${name}`;

// function add(a, b) {
//     return a + b;
// }
// let add = (a, b) => a+b;
// console.log(add(2, 5));

// function that returns the string 'Cat'
// let f = () => 'cat';
// console.log(f());

// function f(a, b) {
//     let sum = a + b;
//     sum = sum + 10;
//     return sum;
// }

// let f = (a, b = 5) => {
//     let sum = a + b;
//     sum = sum + 10;
//     return sum;
// }

// console.log(f(1));

// arrow functions can be used as methods
// .. this
var obj = {
    name: 'A',
    f1: function() {
        console.log(this, this.name);
    },
    farrow: () => {
        console.log(this, this.name);
    }
}

obj.farrow();

// difference between arrow functions & normal functions
// 1. Normal fucntions bind this to the current object
// Arrow functions do not bind this to the current object
// Arrow functions take the value of this from it's scope
// Nodejs this -> {}
// Browser this -> Window












// 1. takes an argument (name) and returns `Hello name`

// console.log(f('Hari'));


