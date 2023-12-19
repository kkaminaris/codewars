// There exists a sequence of numbers that follows the pattern

//           1
//          11
//          21
//         1211
//        111221
//        312211
//       13112221
//      1113213211
//           .
//           .
//           .

// Starting with "1" the following lines are produced by "saying what you see", so that line two is "one one", line three is "two one(s)", line four is "one two one one".

// Write a function that given a starting value as a string, returns the appropriate sequence as a list. The starting value can have any number of digits. The termination condition is a defined by the maximum number of iterations, also supplied as an argument.

// My solution

function lookAndSay(data,len){
    const result = [];
    for (let i = 0; i < len; i++) {
      result[i] = data = data.replace(/(.)(\1{0,})/g, (match, p, count) => {
        return count.length + 1 + p;
      });
    }
    return result;
}