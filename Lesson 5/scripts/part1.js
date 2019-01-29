var parentBlock = document.getElementById("parent");
var blackBlock = document.createElement("div");
var whiteBlock = document.createElement("div");

blackBlock.className = "black";
whiteBlock.className = "white";

parentBlock.appendChild(blackBlock);
parentBlock.appendChild(whiteBlock);