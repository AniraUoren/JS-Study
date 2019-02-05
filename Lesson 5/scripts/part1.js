var $parentBlock = document.getElementById("parent");
var $blackBlock = document.createElement("div");
var $whiteBlock = document.createElement("div");
var $textCounter = document.createElement("p");

$blackBlock.className = "black";
$whiteBlock.className = "white";
$textCounter.className = "counterNum";

function generateWhiteBlack() {
    for (var j = 0; j < 8; j++){
        if(j % 2 === 0){
            var div = $whiteBlock.cloneNode(true);
            $parentBlock.appendChild(div);
        } else {
            div = $blackBlock.cloneNode(true);
            $parentBlock.appendChild(div);
        }
    }
}

function generateBlackWhite() {
    for (var j = 0; j < 8; j++){
        if(j % 2 === 0){
            var div = $blackBlock.cloneNode(true);
            $parentBlock.appendChild(div);
        } else {
            div = $whiteBlock.cloneNode(true);
            $parentBlock.appendChild(div);
        }
    }
}

function generateCounterNumber(count) {
    var $counter = $textCounter.cloneNode(true);
    $counter.setAttribute("class", "counter counter-left");
    $counter.textContent = count;
    $parentBlock.appendChild($counter);
}

function generateCounterLetter(count) {
    var array = "ABCDEFGH";
    var $counter = $textCounter.cloneNode(true);
    $counter.setAttribute("class", "counter counter-top");
    $counter.textContent = array[count];
    $parentBlock.appendChild($counter);
}

var $helpBlock = $textCounter.cloneNode(true);
$parentBlock.appendChild($helpBlock);

for (var i = 1; i < 9; i++){
    generateCounterLetter(i-1);
}

for (var i = 1; i < 9; i ++){
    generateCounterNumber(i);
    if (i % 2 === 0){
        generateBlackWhite();
    } else {
        generateWhiteBlack();
    }
}