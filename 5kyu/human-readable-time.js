// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

//     HH = hours, padded to 2 digits, range: 00 - 99
//     MM = minutes, padded to 2 digits, range: 00 - 59
//     SS = seconds, padded to 2 digits, range: 00 - 59

// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// My solution

function humanReadable (seconds) {
    return Math.floor(seconds/3600).toString().padStart(2, '0') + ':' + Math.floor((seconds%3600)/60).toString().padStart(2, '0') + ':' + ((seconds%3600)%60).toString().padStart(2, '0');
}

