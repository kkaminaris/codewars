// Given an array of positive or negative integers

//  I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.
// Example:

// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]

// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

//     It can happen that a sum is 0 if some numbers are negative!

// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

//     In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.


// My solution

const isPrime = (n) => {
    if (n==1)
      return false;
    for (let i=2; i<=Math.sqrt(n); i++)
      if (n%i==0)
        return false;
    return true;
}
  
function sumOfDivided(lst) {
    //your code
    let result = [];
    
    // find max
    let max = Math.max(...lst.map(a => Math.abs(a)));
    
    for (let i=2; i<=max; i++)
      if (isPrime(i)) {
        let sum = lst.reduce(([s, flag], n) => {
          return (n%i==0) ? [s + n, 1] : [s, flag];
        }, [0, 0]);
        if (sum[1])
          result.push([i, sum[0]]);
      }
    
    console.log(result);
    return result;
}
   