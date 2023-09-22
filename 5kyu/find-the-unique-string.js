// There is an array of strings. All strings contains similar letters except one. Try to find it!

// findUniq([ 'Aa', 'aaa', 'aaaaa', 'BbBb', 'Aaaa', 'AaAaAa', 'a' ]) === 'BbBb'
// findUniq([ 'abc', 'acb', 'bac', 'foo', 'bca', 'cab', 'cba' ]) === 'foo'

// Strings may contain spaces. Spaces are not significant, only non-spaces symbols matters. E.g. string that contains only spaces is like empty string.

// It’s guaranteed that array contains more than 2 strings.

// My solution

function findUniq(arr) {
    // do magic
    arrNorm = arr.map((a, i) => [Array.from(new Set(a.toLowerCase())).sort().toString(), i]).sort();
    return arrNorm[0][0]==arrNorm[1][0] ? arr[arrNorm.pop()[1]] : arr[arrNorm[0][1]];
}