let array=[100,200,4000];
let totalbill=0;
for(let i of array){
    totalbill+=i;
}
console.log(totalbill);

//reduce()
console.log(array.reduce((acc,curr)=>{ return acc+curr},0));