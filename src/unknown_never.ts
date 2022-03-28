//ts unknown
let userInput: unknown; // more strict version of any
let userName: string;

userInput = 5;
userInput = 'Max';

// userName = userInput; // will produce an error

if (typeof userInput === 'string') {
    userName = userInput;
}


// ts never
function generateError(message: string, code: number): never {
    throw {message: message, code: code};
} // no return type, not even undefined

