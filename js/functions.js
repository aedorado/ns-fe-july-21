// public static int sum(int a, int b) {
//     return a + b;
// }

function sum(a, b) {
    return a + b;
} 

function sq(a) {
    // console.log(a**2);
}

function printDetails(name, age) {
    console.log(`My name is ${name} and I am ${age} years old.`);
}

// let s = sum(1, 2);
// console.log(s);
// console.log(sq(10));
// console.log(printDetails('Anurag', 25));

// Function expressions
// function stored in a variable
// let square = function (arg) {
//     return arg**2;
// }

// const square = function (x) {
//     return x * x;
// }

// const fact = function (n) {
//     return n < 2 ? 1 : n * fact(n-1) ;
// }

// console.log(fact(7));



// let square = function(arg) {
//     return arg**2;
// }

// typeof and logging of functions
// let x = 10;
// console.log(typeof square);
// console.log(square);

// function outer() {
//     console.log('outer');
//     function inner() {
//         function inner1() {
//             console.log('inner 1');
//         }
//         inner1();
//         console.log('inner');
//     }
//     inner();
// }

// outer();

// function outer() {
//     console.log('outer');
//     function inner() {
//         console.log('inner');
//         function inner2() {
//             console.log('inner2');
//         }
//         inner2();
//     }
//     inner();
// }
// outer();
// inner();

// let - block 
// var - function

// let myName = "P";

// function getScore() {
//     let num1 = 40;
//     function add() {
//         let num2 = 60;
//         return myName + ' scored ' + (num1 + num2 + num3);
//     }
//     let sum = add();
//     return sum;
// }

// console.log(getScore());

// Functions are first class objects? 
// can be stored in variables and passed to other functions and returned from other functions

// lexical scope ~ location
// lexical scope defines all the variables that can be accessed within a function  

// closure - function along with its lexical scope

// Closure - Example 1
// let m = 100;
// function getAdder() {
//     let n = 10;
//     const add = function (a, b) {
//         return m + n + a + b;
//     }
//     return add;
//     // add(); 
// }

// // adder is the add function with its lexical scope,
// // meaning the add fucntion with
// // all the variables that it can access
// const adder = getAdder();
// console.log(adder(1, 2));

// function getAdder(a) {
//     const add = function (b) {
//         return a + b;
//     }
//     return add;
// }
// const adder10 = getAdder(10);
// const adder50 = getAdder(50);
// console.log(adder50(7));

// callbacks
// a function passed as argument to another function
// and invoked at a later point in time
// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// function process(callback) {
//     callback('A');
//     // callback('A');
// }

// process(greet);
 
// function demo() {
//     let v1 = 10;
//     if (true) {
//         let v2 = 100;
//         console.log(v1, v2);
//     }
//     console.log(v1, v2);
// }

// demo();


