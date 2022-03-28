"use strict";
//ts unknown
let userInput; // more strict version of any
let userName;
userInput = 5;
userInput = 'Max';
// userName = userInput; // will produce an error
if (typeof userInput === 'string') {
    userName = userInput;
}
// ts never
function generateError(message, code) {
    throw { message: message, code: code };
} // no return type, not even undefined
