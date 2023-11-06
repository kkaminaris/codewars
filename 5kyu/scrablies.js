// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

//     Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered.

// Examples

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

// My solution

function scramble(str1, str2) {
    let alpha1 = {};
    for (let i=97; i<123; i++)
      alpha1[String.fromCharCode(i)] = 0;
    
    for (let i=0; i<str1.length; i++)
      alpha1[str1[i]]++;
    console.log(alpha1);
    
    let alpha2 = {};
    for (let i=97; i<123; i++)
      alpha2[String.fromCharCode(i)] = 0;
    
    for (let i=0; i<str2.length; i++)
      alpha2[str2[i]]++;
    console.log(alpha2);
    
    for (let i=97; i<123; i++)
      if (alpha2[String.fromCharCode(i)] > alpha1[String.fromCharCode(i)])
        return false;
    
    return true;
}