var $cart = document.getElementById("cart"); //cart block from html
var cartElements =[];
// var catalogLength = document.getElementsByClassName("catalog_item").length; //вспомогательная переменная для получения длинны массива элементов
var $catalog = document.getElementById("catalog"); //блок catalog
// var itemsArray = []; //массив объектов с названием и ценой каждого елемента каталога
//
// //получение данных я решила сделать считыванием элементов со страницы
//
// function getElementCatalog(counter) {
//     var itemObject = {};
//     itemObject.name = $catalog.getElementsByClassName("catalog_item_name")[counter].innerText;
//     itemObject.image = $catalog.getElementsByClassName("catalog_item_img")[counter].getAttribute("src");
//     itemObject.price = parseInt($catalog.getElementsByClassName("catalog_item_price")[counter].innerText);
//     itemsArray[counter] = itemObject;
//     return itemObject;
// }
//
// function getElementsArray() {
//     for (var i = 0; i < catalogLength; i++){
//         itemsArray[i] = getElementCatalog(i);
//     }
//
// }
//
// getElementsArray();

//проверка на наличие товара в корзине

function isItemAddYet(itemObject) {
    var quantity = 0;

    if (cartElements.length === 0){
        cartElements[0] = itemObject;
        cartElements[0].name = itemObject.name;
        cartElements[0].image = itemObject.image;
        cartElements[0].quantity = 1;
        cartElements[0].price = itemObject.price;

        quantity = cartElements[0].quantity;

    } else {
        for (var i = 0; i < cartElements.length; i++) {
            if (cartElements[i].name === itemObject.name && cartElements[i].price === itemObject.price)
            {
                cartElements[i].quantity++;

                quantity = cartElements[i].quantity;

            } else {
                var length = cartElements.length;
                cartElements[length] = itemObject;
                cartElements[length].name = itemObject.name;
                cartElements[length].image = itemObject.image;
                cartElements[length].quantity = 1;
                cartElements[length].price = itemObject.price;

                quantity = cartElements[length].quantity;
            }

        }
    }
    return (quantity);
}

// создание элемента для корзины

function createCartElement(itemObject) {
    var cartElement = document.createElement("div");
    var cartElementName = document.createElement("p");
    var cartElementImage = document.createElement("img");
    var cartElementQuantity = document.createElement("p");
    var cartElementPrice = document.createElement("p");
    var elementTotal = document.getElementById("total");

    cartElement.className = "cart_popup_element";

    cartElementName.className = "cart_popup_element_name";
    cartElementName.innerText = itemObject.name;

    console.log(cartElementName);   //отладка

    cartElementImage.className = "cart_popup_element_img";
    cartElementImage.setAttribute("src", itemObject.image);

    console.log(cartElementImage);  //отладка

    cartElementPrice.className = "cart_popup_element_price";
    cartElementPrice.innerText = itemObject.price;

    console.log(cartElementPrice);  //отладка

    cartElementQuantity.className = "cart_popup_element_quantity";
    cartElementQuantity.innerText = isItemAddYet(itemObject);

    cartElement.appendChild(cartElementImage);
    cartElement.appendChild(cartElementName);
    cartElement.appendChild(cartElementQuantity);
    cartElement.appendChild(cartElementPrice);

    $cart.insertBefore(cartElement, elementTotal);
}


$catalog.addEventListener("click", function(event){
    var target = event.target;
    console.log(target);                        //отладка
    console.log(target.parentNode.parentNode);  //отладка
    var catalogItem = target.parentNode.parentNode;

    var itemObject = {};

    itemObject.name = catalogItem.getElementsByClassName("catalog_item_name")[0].innerText;
    itemObject.image = catalogItem.getElementsByClassName("catalog_item_img")[0].getAttribute("src");
    itemObject.price = catalogItem.getElementsByClassName("catalog_item_price")[0].innerText;

    console.log(itemObject);

    createCartElement(itemObject);
    return(itemObject);
});




