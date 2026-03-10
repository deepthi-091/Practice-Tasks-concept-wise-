let names=["ram","john","alex","sam"];
// console.log(names.find(i => i === "alexx")); // undefined
// console.log(names.find(i => i === "alex")); // alex
console.log(names.find(i => {
    if(i === "alex"){
        return true;
    }
    else{
        return false;
    }
}));
//if it seems truthy value it return that element 
// for(let i of names){
//     if(i === "alex"){
//         console.log("found alex");
//     }
//     else{
//         console.log("not found");
//     }
// }