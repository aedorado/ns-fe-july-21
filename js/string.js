
let city = 'Lucknow';

let country = 'India';

let address = city + ', ' + country;

console.log(address);

console.log(address.length);    // JAVA: s.length();

console.log(address.toUpperCase());   
console.log(address.toLowerCase());   

let s = "       some content        ";
console.log(s);
console.log(s.trim());

let haystack = "kfasdlkvjoi needle jdflkajsdfl lkfjasdfi lfkjasldfj flkasjdflksd"
let needle = "abcxyz";
console.log(haystack.includes(needle));

console.log(needle.charAt(3));

console.log(needle.concat("123"));

let csv = "cat,dog,cow,mouse,peacock";
console.log(csv.split(','));  
