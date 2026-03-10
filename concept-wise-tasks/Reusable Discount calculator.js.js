const prompt=require("prompt-sync")();
let price=prompt("Enter price");
let discount=prompt("Enter discountPercent");

function calculateDiscount(price,discount){
    return (price*(1-discount/100));
}
let amount=calculateDiscount(price,discount);
console.log(`Final price: ${amount}`);