// 1. User made - provided by us
// 2. NPM modules - provided by community
// 3. Node js standart modules - provided by node js


function printName(name) {
    console.log(name);
}

function printAge(age) {
    console.log(age);
}

module.exports = {
    printAge,
    printName
};
