// const person = {
//     firstName: 'Anurag',
//     lastName: 'Das',
//     address: '',
//     age: 25,
//     getBio: function() {
//         return `${this.firstName} is ${age} years old`;
//     }
// }

// const person1 = {
//     firstName: 'Suraj',
//     lastName: 'Yadav',
//     cityName: '',
//     // age ..
//     // getBio .. 
// }

const Person = function (firstName, lastName, age = 25) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    // this.setName = function(name) {
    //     let nameParts = name.split(' ');
    //     this.firstName = nameParts[0];
    //     this.lastName = nameParts[1];
    // }
}

// prototpye is a special object that defines the common 
// methods and properties of all objects 
// inheriting from it
// On this object, we put everything that we want to share 
// with all the instance of this given constructor function

Person.prototype.getBio = function() {
    return `${this.firstName} is ${this.age} years old.`;
}

Person.prototype.setName = function(name) {
    let nameParts = name.split(' ');
    this.firstName = nameParts[0];
    this.lastName = nameParts[1];
}

Person.prototype.taxRate = 0;

const me = new Person('Anurag', 'Das');
me.taxRate = 10;
me.getBio = function () {
    return 'Whatever';
}
console.log(me.getBio());

// property shadowing

const me1 = new Person('Anurag', 'Das');
console.log(me1.getBio());
// console.log(me1, me1.taxRate);



console.log(me1.__proto__)

// me.setName('Rizwan Patel');
// const me1 = new Person('Saurabh', 'Lomte');
// console.log(me1, me1.location);

// prototypal inheritance - anything defined on the prototype of the object
// can be accessed on the object

// const me = Person();
// console.log(me);

// new operator generates an empty object
// and it give us access to that empty object, (where? how?)
// where? in the constructor function 
// how? via this keyword
// const me = new Person('Anurag', 'Das');
// console.log(me);

// object -> Object.prototype -> null
// array -> Array.prototype -> Object.prototype -> null
// fucntion -> Function.prototype -> Object.prototype -> null
// string -> String.prototype -> Object.prototype -> null
// number -> Number.prototype -> Object.prototype -> null

