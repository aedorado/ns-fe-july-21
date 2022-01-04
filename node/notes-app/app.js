import chalk from 'chalk';
import validator from 'validator';
// const { printAge, printName } = require('./utils.js');
// console.log(chalk.blue('I am chalk'));
// console.log(chalk.yellow('I am yellow chalk'));
// console.log(chalk.blue.bgRed.bold('Hello world!'))
// console.log(chalk.green.inverse('Inverted colors'));
// printAge(10)
// printName('Anurag');

console.log(validator.isEmail('foobar.com') ? chalk.green('Valid'): chalk.red('Invalid'));

