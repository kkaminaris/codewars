var prompt = require('prompt-sync')();

// program to generate fibonacci series up to a certain number

// take input from the user
const number = parseInt(prompt('Enter a positive number: '));
let n1 = 1, n2 = 1, nextTerm, i=2;

console.log(number);

let array = [];

console.log('Fibonacci Series:');
array.push(n1); // print 0
array.push(n2); // print 1

nextTerm = n1 + n2;

while (i <= number) {

    // print the next term
    array.push(nextTerm%10);

    n1 = n2;
    n2 = nextTerm;
    nextTerm = n1 + n2;
    i++;
}

console.log(array);

