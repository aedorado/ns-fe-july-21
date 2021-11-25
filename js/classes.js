class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getBio() {
        let bio = `${this.firstName} is ${this.age} years old.`;
        return bio;
    }

    setName(fullName) {
        const names = fullName.split(' ');
        this.firstName = names[0];
        this.lastName = names[1];
    }
}

// let me = new Person('Anurag', 'Sharma', 25);
// me.setName('Krisanu Dey');
// console.log(me.getBio());

class Employee extends Person {
    constructor(firstName, lastName, age, position) {
        // the very first thing we do in Person constructor is 
        // call the constructor of the parent class
        super(firstName, lastName, age);
        this.position = position;
    }
    // override some methods
    getBio() {
        return `${this.firstName} is ${this.age} years old and words as a ${this.position}`;
    }
    // new behaviour
    yearsRemaining() {
        return 60 - this.age;
    }
}

const me = new Employee('Anurag', 'Sharma', 25, 'Product Engineer');
console.log(me.yearsRemaining());



// class Person {
//     constructor() {
//         this.firstName = "Anurag";
//         this.lastName = "Das";
//         this.age = 25;
//     }
// }

// let person = new Person();
// console.log(person);
