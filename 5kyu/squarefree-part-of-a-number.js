// The squarefree part of a positive integer is the largest divisor of that integer which itself has no square factors (other than 1). For example, the squareefree part of 12 is 6, since the only larger divisor is 12, and 12 has a square factor (namely, 4).

// Your challenge, should you choose to accept it, is to implement a squareFreePart function which accepts a number n and returns the squarefree part of n.

// In the case that n = 1, your function should return 1. Also, if the input doesn't make sense (e.g. if it is not a positive integer), the function should return null/None.

// Here are some examples:

// squareFreePart(2) // returns 2
// squareFreePart(4) // returns 2
// squareFreePart(24) // returns 6, since any larger divisor is divisible by 4, which is a square
// squareFreePart("hi") // returns null
// squareFreePart(0) // returns null

// Good luck!

// My solution 

function squareFreePart(n) {
    // Let's do some math!
    if (n < 1 || typeof n !== 'number' || !isFinite(n) || n%1)
      return null;
    if (n==1)
      return 1;
    for (let i=2; i<=Math.sqrt(n); i++) {
      if (n % Math.pow(i,2) == 0) {
        return squareFreePart(n/i);
        }
      }
    return n;
}
