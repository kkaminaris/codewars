// Given an array of numbers and a target number, your task is to return an array of numbers which when summing them up equal to target number. You can pick numbers only from a given array, but you can take them as many times as you need. To not create different solutions you should always pick as big number as possible. Array of numbers will be sorted in descending order (bigger numbers come first, smaller numbers are in the end). If it is impossible to get to the target number, return an empty array.
// Input
// As arguments you will receive:
// numbers: array of positive integers from 1 to 1 000, sorted in descending order.
// target: number - positive integer from 1 to 100 000.
// All inputs will be valid.
// Output
// Your function should return an array of integers from the input array that when summing equals to target number. Return an empty array when it is not possible.
// Tests
// Your function should pass 8 static tests plus 292 random tests. Total amount of tests is 300.
// Good luck!

// My solution

const getNumbers = (numbers, target) => {  
    // todo: fix me
    let attempt = [];
    let subattempt = [];
    let tmpTarget = target;
    
    for (let i=0; i<numbers.length; i++) {
      
      if (i==numbers.length-1 && numbers[i]==tmpTarget)
        return attempt.concat(numbers[i]);
      else if (i==numbers.length-1 && numbers[i]>tmpTarget) {
        do {
          tmpTarget += attempt[attempt.length-1];
          i = numbers.lastIndexOf(attempt[attempt.length-1]) + 1;
          if (!i)
            return [];
          attempt.pop();
        } while (i>numbers.length-1);
      }
      
      if (numbers[i]>tmpTarget)
        continue;
      let times = tmpTarget/numbers[i] | 0;
      tmpTarget -=numbers[i] * times; 
      let tmpArray = Array.from({length:times}, v => numbers[i])
      attempt.push(...tmpArray);
      console.log(...tmpArray);
      i--;
      if (!tmpTarget)
        return attempt;
      
    }
    return attempt;
}