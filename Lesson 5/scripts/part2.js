var $cartBlock = document.getElementById("cartBlock");
var $cart = document.createElement("div");
var $button = document.getElementById("button");
var product = {
    descriptionProduct: "Item 1",
    priceProduct: 100
};

function addItemToCart(){
    var counter = 0;
    var summaryPrice = 0;
    $cart.textContent = "В корзине " + counter + " товаров на сумму " + summaryPrice + " рублей."
}

$cart.textContent = "Корзина пуста!";
$cartBlock.appendChild($cart);

$button.onclick = addItemToCart;