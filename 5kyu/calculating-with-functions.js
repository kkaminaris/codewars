// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3

// Requirements:

//     There must be a function for each number from 0 ("zero") to 9 ("nine")
//     There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
//     Each calculation consist of exactly one operation and two numbers
//     The most outer function represents the left operand, the most inner function represents the right operand
//     Division should be integer division. For example, this should return 2, not 2.666666...:

// eight(dividedBy(three()));

// My solution

function zero(op) {
    if (!arguments.length)
    return 0;
    return Math.floor(eval(0 + op));
}
function one(op) {
    if (!arguments.length)
    return 1;
    return Math.floor(eval(1 + op));
}
function two(op) {
    if (!arguments.length)
    return 2;
    return Math.floor(eval(2 + op));
}
function three(op) {
    if (!arguments.length)
    return 3;
    return Math.floor(eval(3 + op));
}
function four(op) {
    if (!arguments.length)
    return 4;
    return Math.floor(eval(4 + op));
}
function five(op) {
    if (!arguments.length)
    return 5;
    return Math.floor(eval(5 + op));
}
function six(op) {
    if (!arguments.length)
    return 6;
    return Math.floor(eval(6 + op));
}
function seven(op) {
    if (!arguments.length)
    return 7;
    return Math.floor(eval(7 + op));
}
function eight(op) {
    if (!arguments.length)
    return 8;
    return Math.floor(eval(8 + op));
}
function nine(op) {
    if (!arguments.length)
    return 9;
    return Math.floor(eval(9 + op));
}

function plus(r) {
    return ` + ${r}`;
}
function minus(r) {
    return ` - ${r}`;
}
function times(r) {
    return ` * ${r}`;
}
function dividedBy(r) {
    return ` / ${r}`;
}