//получаем случайное число от 0 до 999
function getRandomInt(min, max)
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//считаем сотни у числа
function getHundreds(number) {
    return (Math.floor(number / 100));
}

//считаем десятки у числа
function getDecades(number) {
    var buffer = number - getHundreds(number)*100;
    return (Math.floor(buffer / 10));
}

//считаем единицы у числа
function getUnits(number) {
    var buffer = number - getHundreds(number)*100 - getDecades(number)*10;
    return (buffer);
}

//вывод в HTML числа
var randNumber = getRandomInt(0, 999);
document.getElementById("number").innerHTML = randNumber;

//формируем объект
var numberObject ={};

numberObject.handreds = getHundreds(randNumber);
numberObject.decades = getDecades(randNumber);
numberObject.units = getUnits(randNumber);

//вывод разложения числа
document.getElementById("Hundreds").innerHTML = "Число сотен - " + numberObject.handreds;
document.getElementById("Decades").innerHTML = "Число десятков - " + numberObject.decades;
document.getElementById("Units").innerText = "Число единиц - " + numberObject.units;

