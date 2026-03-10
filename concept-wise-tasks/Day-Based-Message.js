const prompt=require("prompt-sync")();
let day=prompt(`choose a day:`).toLowerCase();

switch(day){
    case "monday": case "tuesday": case "wednessday": case "thursday": case "friday":
        console.log("Working day")
        break;
    case "saturday":
        console.log("Weekend vibes");
        break;
    case "sunday":
        console.log("Rest day");
        break;
    default:
        console.log("invalid input");
}

