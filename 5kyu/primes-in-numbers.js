// Given a positive number n > 1 find the prime factor decomposition of n. The result will be a string with the following form :

//  "(p1**n1)(p2**n2)...(pk**nk)"

// with the p(i) in increasing order and n(i) empty if n(i) is 1.

// Example: n = 86240 should return "(2**5)(5)(7**2)(11)"

// My solution

const isPrime = (n) => {
    for (let i=2; i<=n/2; i++)
      if (n%i===0)
        return false;
    return true;
}
  
  function primeFactors(n){
    let factors = {};
    for (let i=2; i<=n; i++) {
      if (n%i===0 && isPrime(i)) {
        n = n/i;
        factors[i] ? factors[i]++ : factors[i]=1;
        i--;
      }
    }
    let result = "";
    for (let factor in factors)
      result += (factors[factor]>1) ? `(${factor}**${factors[factor]})` : `(${factor})`;
    return result;
}