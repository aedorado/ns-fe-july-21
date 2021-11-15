// IIFE - Immedialtely Invoked Function Expression
// 1. Remove the name
// 2. enlose function and its body in ()
// 3. call the function 

// 1. Prevents pollution in global namespace

var a;
var b;
var c;

(function () {
    var a; 
    var b;
    var c;
    console.log(10);
}) ();

// f();

// function f() {
    // statements
// }
// f();
