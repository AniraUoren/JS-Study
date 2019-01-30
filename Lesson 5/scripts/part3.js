var $catalogBlock = document.getElementById("catalog");
var $catalog = [];

function createItemDescription(counter) {
    return ("Item " + counter);
}

function createItemPrice(counter) {
    return (counter * 100);
}

function createItemQuantity(counter) {
    return (counter * 10);
}

function createCatalogItem(counter) {
    var $catalogItem = document.createElement("div");
    var $description = document.createElement("p");
    var $price = document.createElement("p");
    var $quantity = document.createElement("p");

    $catalogItem.className = "block";
    $description.className = "text";
    $price.className = "price";
    $quantity.className = "text";

    $description.textContent = createItemDescription(counter);
    $price.textContent = createItemPrice(counter);
    $quantity.textContent = createItemQuantity(counter);

    $catalogItem.appendChild($description);
    $catalogItem.appendChild($price);
    $catalogItem.appendChild($quantity);

    return ($catalogItem);
}

for (var i = 0; i < 5; i ++){
    $catalog[i] = createCatalogItem(i + 1);
    $catalogBlock.appendChild($catalog[i]);
}

