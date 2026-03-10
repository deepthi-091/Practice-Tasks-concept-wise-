let array=[200,500,600,8000];
function filter(){
    for(let i of array){
        if(i>1000){
            console.log(i);
        }
    }
}
filter();

//filter method
console.log(array.filter(i => i>1000));
//return an new array