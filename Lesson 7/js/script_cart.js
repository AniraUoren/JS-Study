var $cartContainer = document.getElementById("cart-container");
var emptyCart = document.createElement("p");

function addToLocalStorageCartElements() {
    var serialObj;

    serialObj = JSON.stringify(cartElements);
    localStorage.setItem("cartElements", serialObj);
}

function cartAccordion() {
    var cartButtonBefore1 = document.getElementById("cartButtonBefore1");
    var cartButtonBefore2 = document.getElementById("cartButtonBefore2");
    var cartButtonBefore3 = document.getElementById("cartButtonBefore3");
    var cartButtonAfter1 = document.getElementById("cartButtonAfter1");
    var cartButtonAfter2 = document.getElementById("cartButtonAfter2");
    var cartButtonAfter3 = document.getElementById("cartButtonAfter3");

    var hiddenElement1 = document.getElementById("hiddenElement1");
    var hiddenElement2 = document.getElementById("hiddenElement2");
    var hiddenElement3 = document.getElementById("hiddenElement3");

    $cartContainer.addEventListener("click", function () {
        switch (event.target) {
            case(cartButtonAfter1):{
                hiddenElement1.classList.add("no-display");
                hiddenElement2.classList.remove("no-display");
                break;
            }
            case(cartButtonAfter2):{
                hiddenElement2.classList.add("no-display");
                hiddenElement3.classList.remove("no-display");
                break;
            }
            case(cartButtonAfter3):{
                alert("Отправлено");
                break;
            }
            case(cartButtonBefore1):{
                hiddenElement1.classList.remove("no-display");
                hiddenElement2.classList.add("no-display");
                hiddenElement3.classList.add("no-display");
                break;
            }
            case(cartButtonBefore2):{
                hiddenElement1.classList.add("no-display");
                hiddenElement2.classList.remove("no-display");
                hiddenElement3.classList.add("no-display");
                break;
            }
            case(cartButtonBefore3):{
                hiddenElement1.classList.add("no-display");
                hiddenElement2.classList.add("no-display");
                hiddenElement3.classList.remove("no-display");
                break;
            }
        }
    })

}
cartAccordion();

//работа с элментами корзины

var cartElements = JSON.parse(localStorage.getItem("cartElements"));

function createCartElementonCartPage(counter) {
    var element = document.createElement("div");
    var elementImage = document.createElement("img");
    var elementName = document.createElement("p");
    var elementQuantity = document.createElement("p");
    var elementPrice = document.createElement("p");
    var elementButtonAdd = document.createElement("button");
    var elementButtonRemove = document.createElement("button");

    element.classList.add("cart-block_element");
    elementImage.classList.add("cart-block_element_img");
    elementName.classList.add("cart-block_element_name");
    elementQuantity.classList.add("cart-block_element_quantity");
    elementPrice.classList.add("cart-block_element_price");
    elementButtonAdd.classList.add("cart-block_element_button");
    elementButtonRemove.classList.add("cart-block_element_button");

    elementImage.setAttribute("src", cartElements[counter].image);
    elementName.innerText = cartElements[counter].name;
    elementQuantity.innerText = cartElements[counter].quantity;
    elementPrice.innerText = cartElements[counter].price;
    elementButtonAdd.innerHTML = "<i class=\"fa fa-plus\" aria-hidden=\"true\">";
    elementButtonRemove.innerHTML = "<i class=\"fa fa-eraser\" aria-hidden=\"true\"></i>";

    element.appendChild(elementImage);
    element.appendChild(elementName);
    element.appendChild(elementQuantity);
    element.appendChild(elementPrice);
    element.appendChild(elementButtonAdd);
    element.appendChild(elementButtonRemove);

    return (element);
}

function addToCartList() {
    for (var i = 0; i < cartElements.length; i++){
        hiddenElement1.appendChild(createCartElementonCartPage(i));
    }
}

addToCartList();

function editCartElementQuantity(clickedElement, act){
    var name = clickedElement.querySelector(".cart-block_element_name").innerText;
    var price = clickedElement.querySelector(".cart-block_element_price").innerText;
    var index;

    for (var i = 0; i < cartElements.length; i++){
        if (name === cartElements[i].name && price === cartElements[i].price){
            index = i;
        }
    }

    switch (act) {
        case ("add"):{
            cartElements[index].quantity ++;
            return (cartElements[index].quantity);

            break;
        }
        case ("remove"):{
            cartElements[index].quantity --;
            if (cartElements[index].quantity === 0){
                clickedElement.remove();
                cartElements.splice(index, 1);
            } else{
                return (cartElements[index].quantity);
            }
            break;
        }
    }

    addToLocalStorageCartElements();
}

function isCartEmpty(){
    if (document.getElementById("hiddenElement1").querySelector(".cart-block_element") === null ){

        emptyCart.classList.add("cart_popup_empty");
        emptyCart.innerText = "Корзина пуста!";

        document.getElementById("hiddenElement1").appendChild(emptyCart);

    }
}

document.getElementById("hiddenElement1").addEventListener("click", function (event) {
    if (cartElements[0].quantity !== undefined){
        if (event.target.classList.contains("fa-plus")){
            event.target.parentNode.parentNode.querySelector(".cart-block_element_quantity").innerText = editCartElementQuantity(event.target.parentNode.parentNode, "add");
        } else if (event.target.classList.contains("fa-eraser")) {
            event.target.parentNode.parentNode.querySelector(".cart-block_element_quantity").innerText = editCartElementQuantity(event.target.parentNode.parentNode, "remove");
            isCartEmpty();
        }
    } else {
        isCartEmpty();
    }
});

isCartEmpty();
