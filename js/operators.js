
// let x = 10;

// let y = x;

// console.log(2**0);
// console.log(2**1);
// console.log(2**2);
// console.log(2**3);
// console.log(2**4);  // 2^4

let a = 20;
let b = 20;

// console.log(3 == 3);
// console.log(3 == '3');  // == operator does not take type of the operands into consideration
// console.log(301 == '301');  // == operator does not take type of the operands into consideration
// ===
// console.log(3 === 3);   // true
// console.log(3 == '3');     // true 
// console.log(3 === '3');    // false; strict equals takes type into consideration 
// console.log(3 == 'abc');

// let var1 = 3;
// console.log(3 != "3");  // false - numeric 3 is same as string '3' using !=
// console.log(3 !== "3"); // true - numeric 3 is not the same as string '3' using !==

// console.log(3011 == "three thousand eleven"); 

// Logical Operators
// && || !

// console.log(false && false);
// console.log(true && false);
// console.log(false && true);
// console.log(true && true);

// console.log(false || false);
// console.log(true || false);
// console.log(false || true);
// console.log(true || true);

// console.log(!true);
// console.log(!false);

//  FALSY values - 0, null, undefined, NaN, ""
//  TRUTHY values - anything that is not falsy

// && -> last truthy value 
// || -> first truthy value

// console.log(false || 'cat' || 'dog');
// console.log(!'');

// console.log('3' === '3');
// console.log('abc' < 'bac'); // compares by dictionary order
// console.log('abc' > 'bac'); // compares by dictionary order

// console.log('cat' && '' && 'mouse');

// w1 - 0
// w2 - 1
// w3 - 2
// w4 - 3
// w1 < w3 = true
// w3 < w1 = false

// console.log(a > b);
// console.log(a < b);
// console.log(a <= b);
// console.log(a >= b);
// console.log(a == b);
// console.log(a != b);

// && 
// true -> last operand
// false -> first falsy operand

// console.log(0 && null && undefined && 'cat');

// ||
// true -> first truthy operand
// false -> last operand
// return first truthy value
// if none are present then last operand

// console.log(0 || undefined || 1 || null);

console.log(0 || 1 && 2 || 3 && 4 && 5 || 6);
// console.log(0 || (1 && 2));
// console.log(0 || 2);


