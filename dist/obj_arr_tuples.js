"use strict";
// js
let person = {
    name: 'Abdullah',
    age: 69
};
console.log(person);
// console.log(person.lastname); // will produce an error
// ts object
let personts = {
    name: 'Abdullah',
    age: 69
};
console.log(personts);
// console.log(personts.name); // will produce an error
let persontsSpecificObj = {
    name: 'Abdullah',
    // age: 69 //this will produce an error
};
console.log(persontsSpecificObj);
console.log(persontsSpecificObj.name);
let persontsSpecificObj2 = {
    name: 'Abdullah',
    age: 69
};
console.log(persontsSpecificObj2.age);
// array
let hobbies;
hobbies = ['eat', 'sleep', 'play'];
// hobbies = ['eat', 1]; // will give an error
for (let hobby in hobbies) {
    console.log(hobby.toUpperCase);
    // console.log(hobby.map()); // will give an error
}
let mixed;
mixed = ['1', 2];
// tuples
let persontsSpecificObj3 = {
    name: ['Abdullah', 'Abdullah'],
    age: 69,
    routine: [[9, 'Breakfast'], [11, 'Meeting']],
    role: ['author', 1]
};
persontsSpecificObj3.role.push(10); // doesn't produce error but wrong
persontsSpecificObj3.role.push('admin'); // doesn't produce error but wrong
// persontsSpecificObj3.role[0] = 10; // will produce an error
console.log(persontsSpecificObj3);
