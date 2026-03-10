const prompt=require("prompt-sync")();
let input=prompt("u want to login");
let isLoggedin=(input.toLowerCase() === "yes")
const user={
    name:"deepu",
    age:21,
    city:"banglore",
    isLoggedin
}

if(isLoggedin){
    console.log(`welcome ${user.name}`)
}
else{
    console.log("logout success");
}

