const product = {
name: "Phone",
price: 20000,
stock: 5
}
if(product.stock <= 0){ console.log("Out-of-Stock")}
else{console.log(`stock available ${product.stock}`)}