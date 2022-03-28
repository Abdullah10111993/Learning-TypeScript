function combine(input1: (string | number),  input2: (string | number)) {
    // return input1 + input2; // will produce error
    if (typeof input1 === 'number' && typeof input2 === 'number') {
        return input1 + input2;
    } else {
        return input1.toString() + input2.toString();
    }
}

console.log(combine(2, 3));
console.log(combine('Jack', 'Jill'));
