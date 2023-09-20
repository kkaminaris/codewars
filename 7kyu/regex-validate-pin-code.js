// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.
// Examples (Input --> Output)

// "1234"   -->  true
// "12345"  -->  false
// "a234"   -->  false

// My solution

function validatePIN (pin) {
    //return true or false
    return pin.match(/^[0-9]{4}$|^[0-9]{6}$/) ? true : false;
}

// 2nd solution

function validatePIN (pin) {
    //return true or false
    return /^(\d{4}|\d{6})$/.test(pin);
}