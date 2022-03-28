function addFunc(n1: number, n2: number): number {
    return n1 + n2;
}

function print(num: number): void {
    console.log('The result is ' + num);
}

print(addFunc(6, 9));

let addition; // type any

addition = addFunc;
console.log(addition(2, 3));

addition = 5
// console.log(addition(2, 3)); // will produce error but ts doesn't know

let addition_v2 : Function;
addition_v2 = addFunc;

// addition_v2 = 5; // will produce error
addition_v2 = print; 
// addition_v2(2,3); // will produce error but ts doesn't know

let addition_v3 : (a: number, b: number) => number;
addition_v3 = addFunc;
// addition_v3 = print; // will produce error

function addAndHandle(a: number, b: number, cb: (c: number) => void) {
    let result = a + b;
    cb(result);
}

addAndHandle(3, 9, (result) => {
    console.log(result);
    return result; // no error bcoz addAndHandle doesn't care about the return
});

