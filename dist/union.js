"use strict";
function combine(input1, input2) {
    // return input1 + input2; // will produce error
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    }
    else {
        return input1.toString() + input2.toString();
    }
}
console.log(combine(2, 3));
console.log(combine('Jack', 'Jill'));
// literals
function combineAs(input1, input2, as) {
    // return input1 + input2; // will produce error
    if (as === 'numbers') {
        return Number(input1) + Number(input2);
    }
    else {
        return input1.toString() + input2.toString();
    }
}
// console.log(combineAs(2, 3, 'number')); // will produce error for spelling
console.log(combineAs('Jack', 'Jill', 'string'));
function combineAlias(input1, input2, as) {
    // return input1 + input2; // will produce error
    if (as === 'numbers') {
        return Number(input1) + Number(input2);
    }
    else {
        return input1.toString() + input2.toString();
    }
}
console.log(combineAlias(2, 3, 'numbers'));
console.log(combineAlias('Jack', 'Jill', 'string'));
