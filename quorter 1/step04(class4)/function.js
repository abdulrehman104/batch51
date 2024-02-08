"use strict";
// FUNCTION
// FUNCTION DEFINED
function greet() {
    console.log("Hello AbdulRehman");
}
//  FUNCTION CALL
greet();
//    FUNCTION DECLEARED
function greet1(name) {
    console.log("Hello", name);
}
// MULTIPLE FUNCTION CALL
greet1("AbdulRehman");
greet1("Husnain");
greet1("Rashid");
function sum() {
    console.log(2 + 2);
}
sum();
// simple calculator
function sum1(num1, num2) {
    console.log(num1 + num2);
    console.log(num1 - num2);
    console.log(num1 * num2);
    console.log(num1 / num2);
}
sum1(10, 30);
//example
function sum2(val1, val2) {
    console.log(val1 + val2);
    return val1 + val2;
}
let ans = sum2(25, 35);
function mult(val1) {
    console.log(val1 * 2);
}
mult(ans);
