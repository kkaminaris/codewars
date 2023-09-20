// Summation

// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// My solution

var summation = function (num) {
    // Code here
    let sum = 1;
    for (let i = 2; i<num+1; i++)
      sum += i;
    return sum;
}

// 2nd solution

var summation = function (num) {
    // Code here
    return num * (num + 1) / 2;
}