// Write a function which reduces fractions to their simplest form! Fractions will be presented as an array/tuple (depending on the language) of strictly positive integers, and the reduced fraction must be returned as an array/tuple:

// input:   [numerator, denominator]
// output:  [reduced numerator, reduced denominator]
// example: [45, 120] --> [3, 8]

// All numerators and denominators will be positive integers.

// Note: This is an introductory Kata for a series... coming soon!

// My solution:

function reduce(fraction) {
    console.log(fraction);
    const min = Math.min(fraction[0], fraction[1]);
    console.log(min);
    for (let i=2; i<=min; ) {
      if (fraction[0]%i===0 && fraction[1]%i===0)
        [fraction[0], fraction[1]] = [fraction[0]/i, fraction[1]/i];
      else
        i++;
    }
    return fraction;
}