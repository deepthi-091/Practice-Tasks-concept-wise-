let prompt= require("prompt-sync")();
let name=prompt("enter your name:");
const age=prompt("enter your age");
let city=prompt("enter you city name");
let isstudent=prompt("Are you student : yes or No");

console.log(
    `Hello ${name}!
You are ${age} years old and live in ${city}.
Student status: ${isstudent}`);