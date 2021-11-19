// JSON - Javascript Object notation
// JSON is a text format for storing & transportin data

// let a = [{
//     x: 10,
//     y: 100,
//     name: "Anurag",
//     arr: [1,2,3]
// },{a:10},{},{}];

// '{"x":10,"y":100,"name":"Anurag","arr":[1,2,3]}';
// '[{"x":10,"y":100,"name":"Anurag"},{"a":10},{},{}]';

let arr = {
    name: "Anurag",
    age: 25,
    city: "NYC",
    isWorking: true,
    arr: [1, 2, 3, {x: 10, y: [1, 2, 3, {z : 100}]}, "Delhi"],
    f: function() {}
} // -> {}
// let arr = [0, "Delhi", "London", "Paris", 1, 2, 3]
// arr = [a, a]
json = JSON.stringify(arr);
// console.log("arr: ", arr, typeof arr);
// console.log("json:", json, typeof json);

// JSON.parse()
try {
    let parsed = JSON.parse('{"name":"Anurag","age":25,"city""NYC","isWorking":true,"arr":[1,2,3,{"x":10,"y":[1,2,3,{"z":100}]},"Delhi"]}');
    console.log("parsed: ", parsed, typeof parsed);
} catch (e) {
    console.log('Malformed JSON');
}



