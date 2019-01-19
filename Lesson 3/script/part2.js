var basket = [];
var item = {};
var summ = 0;

function countBasketPrice(basket) {
    for (var i = 0; i < basket.length; i++) {
        summ += +basket[i].itemCount * +basket[i].itemPrice;
    }
    return (summ);
}

// для автозаполнения массива объектов
for (var i = 0; i < 5; i++){
    basket[i] = item = {
        itemDescr: "Item" + i,
        itemCount: i + 1,
        itemPrice: i * 100,
    }
}

document.getElementById("result").innerText = countBasketPrice(basket);
