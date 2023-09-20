// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// My solution

function countPositivesSumNegatives(input) {
    // your code here
    console.log(input);
    if (!input || input.length==0)
      return [];
    let x = 0;
    let y = 0;
    input.map((b) => {
      if (b>0)
        x++;
      else if (b<0)
        y = y + b;
      }, 0)
    return [x, y];
}