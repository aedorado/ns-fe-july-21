// small programs
// bigger and bigger and bigger
// ...
// .. 
// ..
// .. 
// .. 
// ..
// ..
// Canva, YT, FB, Notion, ...

// split ia large program
// into smaller modules
// module exports the necessary items
// import and use what is needed from that module

// app.mjs
// import { addTwo } from './addTwo.mjs';

// // Prints: 6
// console.log(addTwo(4));

import { name, addTwo } from './addTwo.mjs';

console.log(addTwo(5));
console.log(name);


