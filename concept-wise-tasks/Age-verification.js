const prompt=require("prompt-sync")();
let age=prompt("enter your age:");
if(age < 0 ){
    console.log("Invalid age.")
}
else if(age < 18){
    console.log("Not allowed");
}
else if(age < 60){
    console.log("Allowed");
}
else{
    console.log("Senior Access");
}