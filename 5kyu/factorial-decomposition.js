// The aim of the kata is to decompose n! (factorial n) into its prime factors.

// Examples:

// n = 12; decomp(12) -> "2^10 * 3^5 * 5^2 * 7 * 11"
// since 12! is divisible by 2 ten times, by 3 five times, by 5 two times and by 7 and 11 only once.

// n = 22; decomp(22) -> "2^19 * 3^9 * 5^4 * 7^3 * 11^2 * 13 * 17 * 19"

// n = 25; decomp(25) -> 2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23

// Prime numbers should be in increasing order. When the exponent of a prime is 1 don't put the exponent.

// Notes

//     the function is decomp(n) and should return the decomposition of n! into its prime factors in increasing order of the primes, as a string.
//     factorial can be a very big number (4000! has 12674 digits, n can go from 300 to 4000).
//     In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

// My solution

function decomp(n) {
  
    const prime_factors_fact = (x) => {
      let result = [];
      for (let i=2; i<=x; i++) {
        let tmp = i;
        for (let j=2; i>1;) {
          if (i%j===0) {
            i = i/j;
            result.push(j);
            continue;
          }
          j++;
        }
        i = tmp;
      }
      return result;
    }
    
    let primes = prime_factors_fact(n);
    
    let dict = {};
    
    primes.forEach(e => {
      if (dict[e]===undefined)
        dict[e] = 1;
      else
        dict[e]++;
    })
    
    let result = "";
    
    for (let key in dict) {
      result += (dict[key]>1) ? key + '^' + dict[key] + ' * ' : key +  ' * ';
    }
    
    result = result.slice(0, -3);
    return result;
    
}