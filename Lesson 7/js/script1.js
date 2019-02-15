var $catalog = document.getElementById("catalog"); //блок catalog
var $cart = document.getElementById("cart"); //cart block from html
window.cartElements =[]; //массив элементов в корзине
var elementTotal = document.createElement("div");


function isElementInArray(itemObject) {
    var index;
    for (var i = 0; i < cartElements.length; i++){
        if (cartElements[i].price === itemObject.price){
            index = i;
        }
    }

    return (index);
}

function addElementToCart(itemObject){
    var index = isElementInArray(itemObject);

    if (index === undefined){
        cartElements.push(itemObject);
    }else {
        cartElements[index].quantity ++;
    }
}

function createTotalElement() {
    var totalPrice = 0;
    var elementTotalDescription = document.createElement("p");
    var elementTotalPrice = document.createElement("p");

    elementTotal.className = "cart_popup_total";
    elementTotalDescription.className = "cart_popup_total-description";
    elementTotalPrice.className = "cart_popup_total-price";

    for (var i = 0; i < cartElements.length; i++){
        totalPrice += cartElements[i].quantity * cartElements[i].price;
    }

    deleteTotalElement();

    elementTotalDescription.innerText = "Total price:";
    elementTotalPrice.innerText = totalPrice;
    elementTotal.appendChild(elementTotalDescription);
    elementTotal.appendChild(elementTotalPrice);
}

function deleteTotalElement() {
    var deleteDescription = elementTotal.querySelector(".cart_popup_total-description");
    var deletePrice = elementTotal.querySelector(".cart_popup_total-price");

    if (deleteDescription !== null && deletePrice !== null){
        elementTotal.removeChild(deleteDescription);
        elementTotal.removeChild(deletePrice);
    }
}

function createCartElement(count) {
    var cartElement = document.createElement("div");
    var cartElementName = document.createElement("p");
    var cartElementImage = document.createElement("img");
    var cartElementQuantity = document.createElement("p");
    var cartElementPrice = document.createElement("p");

    cartElement.className = "cart_popup_element";

    cartElementName.className = "cart_popup_element_name";
    cartElementName.innerText = cartElements[count].name;

    cartElementImage.className = "cart_popup_element_img";
    cartElementImage.setAttribute("src", cartElements[count].image);

    cartElementQuantity.className = "cart_popup_element_quantity";
    cartElementQuantity.innerText = cartElements[count].quantity;

    cartElementPrice.className = "cart_popup_element_price";
    cartElementPrice.innerText = cartElements[count].price;

    cartElement.appendChild(cartElementImage);
    cartElement.appendChild(cartElementName);
    cartElement.appendChild(cartElementQuantity);
    cartElement.appendChild(cartElementPrice);

    return(cartElement);
}

function deleteCartElements() {
    var deleteItemElement = $cart.querySelectorAll(".cart_popup_element");

    for (var i = 0; i < deleteItemElement.length; i++){
        $cart.removeChild(deleteItemElement[i]);
    }
}

function createCartElements(){
    var emptyCart = document.createElement("p");

    emptyCart.className = "cart_popup_empty";

    if(cartElements.length === 0){

        emptyCart.innerText = "Cart Empty";
        $cart.appendChild(emptyCart);
    }

    createTotalElement();
    $cart.appendChild(elementTotal);

    deleteCartElements();

    for (var i = 0; i < cartElements.length; i++){
        $cart.insertBefore(createCartElement(i), elementTotal);
    }

}

function addCartCounter(){
    var count = 0;
    var cartCounter = document.createElement("span");

    for (var i = 0; i < cartElements.length; i++){
        count += cartElements[i].quantity;
    }


    //условие, чтоб не плодить в HTML много span'ов
    if (document.querySelector(".cart-counter") !== null){
        document.querySelector(".cart").removeChild(document.querySelector(".cart-counter"));
    }

    cartCounter.innerText = count;
    if (count !== 0){
        cartCounter.classList.add("cart-counter");
        document.querySelector(".cart").insertBefore(cartCounter, document.querySelector(".cart_link"));
    }


}

$catalog.addEventListener("click", function(event){
    var target = event.target;
    var catalogItem = target.parentNode.parentNode;

    switch(target.innerText){
        case "BUY":{
            var itemObject = {};

            itemObject.name = catalogItem.getElementsByClassName("catalog_item_name")[0].innerText;
            itemObject.image = catalogItem.getElementsByClassName("catalog_item_img")[0].getAttribute("src");
            itemObject.quantity = 1;
            itemObject.price = catalogItem.getElementsByClassName("catalog_item_price")[0].innerText;

            var emptyElement = $cart.querySelector(".cart_popup_empty");

            if (emptyElement !== null){
                $cart.removeChild(emptyElement);
            }

            addElementToCart(itemObject);

            addCartCounter();

            createCartElements();
            break;
        }

        case "SHOW MORE":{

            overlay.classList.remove("no-display");
            modalWindowGallery.classList.remove("no-display");

            break;
        }

    }

});

createCartElements();

//TASK 2 - GALLERY

var modalWindowGallery = document.getElementById("modal-gallery");
var overlay = document.getElementById("overlay");
var bigElementSRCValue = modalWindowGallery.querySelector(".gallery-pic_big_img").getAttribute("src");
var index = 0;

function getGallerySmallPictures(){
    var gallerySmallPictures = modalWindowGallery.querySelectorAll(".gallery-pic_small_img");
    var galleryPicSRCArray = [];

    for (var i = 0; i < gallerySmallPictures.length; i++){
        galleryPicSRCArray[i] = gallerySmallPictures[i].getAttribute("src");
    }

    return (galleryPicSRCArray);
}

function actLeftButton(){
    var smallPicArray = getGallerySmallPictures();
    var bigGalleryPicture = modalWindowGallery.querySelector(".gallery-pic_big_img");

    index = (smallPicArray.length + (-- index)%smallPicArray.length)%smallPicArray.length;
    bigGalleryPicture.setAttribute("src", smallPicArray[index]);

}

function actRightButton() {
    var smallPicArray = getGallerySmallPictures();
    var bigGalleryPicture = modalWindowGallery.querySelector(".gallery-pic_big_img");

    index = (++index)%smallPicArray.length;
    bigGalleryPicture.setAttribute("src", smallPicArray[index]);

}

function deleteActiveClassSmallPics() {
    var smallElements = modalWindowGallery.querySelectorAll(".gallery-pic_small_img");

    for (var i = 0; i < smallElements.length; i++) {
        if(smallElements[i].classList.contains("active_pic")){
            smallElements[i].classList.remove("active_pic");
        }
    }
}

function showSmallPicInBigBlock(clickedElement){
    var smallElement = clickedElement.getAttribute("src");
    var bigElement = modalWindowGallery.querySelector(".gallery-pic_big_img");

    bigElement.setAttribute("src", smallElement);

    deleteActiveClassSmallPics();

    if (clickedElement.getAttribute("src") === modalWindowGallery.querySelector(".gallery-pic_big_img").getAttribute("src")){
        clickedElement.classList.add("active_pic");
    }
}

modalWindowGallery.addEventListener("click", function(event){
    var target = event.target;

    if (target.getAttribute("class") === "gallery-pic_small_img"){
        showSmallPicInBigBlock(target);
    }


    switch (target.getAttribute("id") || target.parentNode.getAttribute("id")) {
        case ("gallery-close"):{
            modalWindowGallery.querySelector(".gallery-pic_big_img").setAttribute("src", bigElementSRCValue);
            deleteActiveClassSmallPics();
            overlay.classList.add("no-display");
            modalWindowGallery.classList.add("no-display");
            break;
        }
        case ("arrow-left"):{
            console.log("left");
            actLeftButton();
            break;
        }
        case ("arrow-right"):{
            console.log("right");
            actRightButton();
            break;
        }
    }
});

//cart.html

function createCartHTMLElement(){
    var element = document.createElement("div");


}