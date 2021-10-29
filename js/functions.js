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
let square = function (arg) {
    return arg**2;
}

// let square = function(arg) {
//     return arg**2;
// }

// typeof and logging of functions
// let x = 10;
// console.log(typeof square);
// console.log(square);

function outer() {
    console.log('outer');
    function inner() {
        console.log('inner');
        function inner2() {
            console.log('inner2');
        }
        inner2();
    }
    inner();
}
outer();
inner();