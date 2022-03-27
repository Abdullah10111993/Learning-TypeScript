// js
function add(n1, n2) {
    return n1 + n2;
}

const num1 = 1;
const num2 = 2;
const num3 = '3';

console.log(add(num1, num2));
console.log(add(num1, num3));

// ts number
function addts(n1: number, n2: number) {
    return n1 + n2;
}

console.log(addts(num1, num2));
// console.log(addts(num1, num3)); // wil produce an error

// ts boolean
function addtsb(n1: number, n2: number, donotReturn: boolean) {
    if (donotReturn) {
        console.log(n1 + n2);
        return;
    }
    return n1 + n2;
}

addtsb(num1, num2, false); // will not print
addtsb(num1, num2, true);


// ts string
function addtsbs(n1: number, n2: number, donotReturn: boolean, phrase: string) {
    if (donotReturn) {
        console.log(phrase + (n1 + n2));
        return;
    }
    return n1 + n2;
}

addtsbs(num1, num2, true, 'The result is ');