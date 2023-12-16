// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// My solution

function duplicateEncode(word){
    word = word.toLowerCase();
    let result = word;
    word.split('').reduce((_, e) => {
      if (word.split('').filter(s => s===e).length > 1) {
        const indices = [];
        let idx = word.split('').indexOf(e);
        while (idx !== -1) {
          indices.push(idx);
          idx = word.split('').indexOf(e, idx + 1);
        }
        for (idx of indices) {
          result = result.split('');
          result[idx] = ')';
          result = result.join('');
        }
      }
      else {
        let idx = word.split('').indexOf(e);
        result = result.split('');
        result[idx] = '(';
        result = result.join('');
      }
    }, 0);
    return result;
}