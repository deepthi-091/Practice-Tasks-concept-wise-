const prompt=require("prompt-sync")();

let cartitems=[];

while(true){
    let value=prompt(`Choose a option : 
0 : add-item
1 : remove-item
2 : check cart items
3 : exit
`);
    switch(value){
        case "0":
            let item=prompt("Enter item to add:");
            cartitems.push(item);
            console.log(item,"added to cart")
            break;
        case "1":
            let rm_item=prompt("Enter item to remove:");
            const index=cartitems.indexOf(rm_item);
            if(index !== -1){
                cartitems.splice(index,1);
                console.log(rm_item,"Removed from cart");
            }
            else{
                console.log("Item not found in cart")
            }
            break;
        case "2":
            console.log(cartitems);
            break;
        case "3":
            console.log("Thank you!");
            process.exit();
            break;
        default:
            console.log("Invalid. choose correct option")
    }
}