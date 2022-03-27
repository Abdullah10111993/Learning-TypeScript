// js
function add(n1, n2) {
    return n1 + n2;
}
var num1 = 1;
var num2 = 2;
var num3 = '3';
console.log(add(num1, num2));
console.log(add(num1, num3));
// ts
function addts(n1, n2) {
    return n1 + n2;
}
console.log(addts(num1, num2));
// console.log(addts(num1, num3)); // wil produce an error
