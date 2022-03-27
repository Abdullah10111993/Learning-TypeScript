// js
let person = {
    name: 'Abdullah',
    age: 69
}

console.log(person);
// console.log(person.lastname); // will produce an error


// ts object
let personts: object = {
    name: 'Abdullah',
    age: 69
}

console.log(personts);
// console.log(personts.name); // will produce an error

let persontsSpecificObj: {
    name: string
} = {
    name: 'Abdullah',
    // age: 69 //this will produce an error
}

console.log(persontsSpecificObj);
console.log(persontsSpecificObj.name);

let persontsSpecificObj2: {
    name: string
    age: number
} = {
    name: 'Abdullah',
    age: 69 
}

console.log(persontsSpecificObj2.age);

// array

let hobbies: string[];
hobbies = ['eat', 'sleep', 'play'];
// hobbies = ['eat', 1]; // will give an error

for (let hobby in hobbies) {
    console.log(hobby.toUpperCase);
    // console.log(hobby.map()); // will give an error
}

let mixed: any[];
mixed = ['1', 2];
