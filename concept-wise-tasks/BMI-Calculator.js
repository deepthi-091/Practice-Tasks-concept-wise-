const prompt=require("prompt-sync")();

let weight=prompt("enter weight");
let height=prompt("enter height");

function calculateBMI(weight,height){
    const BMI = weight / (height*height);

    if(BMI < 18.5){
        console.log("UnderWeight");
    }
    else if(BMI > 24.9 ){
        console.log("Normal weight");
    }
    else{
        console.log("Overweight");
    }

}
calculateBMI(weight,height);