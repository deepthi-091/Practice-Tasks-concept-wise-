const prompt=require("prompt-sync")();
const username="admin";
const password="1234";
let usernamep1=prompt("enter your username:");
let passwd=prompt("Enter your password");

if(username === usernamep1 && password === passwd){
    console.log("Login Successful.");
}
else{
    console.log("Invalid credentials")
}
