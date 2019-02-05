var $cartBlock = document.getElementById("cartBlock");
var $cart = document.createElement("div");
var $button = document.getElementById("button");
var product = {
    descriptionProduct: "Item 1",
    priceProduct: 100
};
var counter = 0;
var summaryPrice = 0;

function addItemToCart(){
    counter++;
    summaryPrice += product.priceProduct;

    $cart.textContent = "В корзине " + counter + " товаров на сумму " + summaryPrice + " рублей."
}

$cart.textContent = "Корзина пуста!";
$cartBlock.appendChild($cart);

$button.addEventListener("click", addItemToCart);