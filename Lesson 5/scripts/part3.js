var product = {};
var $catalogBlock = document.getElementById("catalog");

function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}

function createProductObject(counter) {
        product.description = "Item " + i;
        product.price = i * 100;
        product.quantity = randomInteger(0 , 10);
}

//create objects array
