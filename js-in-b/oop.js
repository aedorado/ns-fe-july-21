// Procedural programming 

// data 
// functions on that data

// let tax = 1;
// let salary = 100000000000;
// let employeName = 'Anurag';

// function gettotalTax() {
//     return tax * salary / 100;
// }

// getSalary() {
//     return salary;
// }


// Object oriented programming

// 1. Encapsulation - data & functionality is combined under one head

const employee = {
    name: 'Anurag',
    salary: 999999999999999999999999999999999999999999999999999999,
    taxRate: 1,
    getSalary: function() {
        return this.salary;
        // fetch the salary form internet & return it
        // get the salary from localstorage & return it
        // get the salry from db and return it
    },
    getTax: function() {
        return this.tax * this.salary / 100;
    }
}

console.log(employee.getSalary());

// 2. Abstraction 
// Hiding unnecesarry details
employee.getSalary(); // this retunr me the right salary

// 3. Inheritance
// Object can get the behaviour and property of another object

let perons = {
    name: 
    age:
    greet(): // 
}

let employee = {
    salary:
    post:
    tenure:
    benefits: 
    getSalary():
}

// by interitance employee will have all the properties and methods of person
// some of these properties and methods can be changed in emplyee also

// 4. Polymorphism - object may behave differently in different situations

