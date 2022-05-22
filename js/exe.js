var inStock = true  
var onSale = true
var price = 0

if(inStock == true){
if(onSale){
alert("buy buy buy !");
}
}

//********/ OU PODEMOS SIMPLIFICAR*******

if (inStock == true && onSale == true){
    //está com um preço ótimo
    alert("Buy buy buy!")
}

if (inStock == true && (onSale == true) || price < 60){
    alert("Buy buy buy")
}