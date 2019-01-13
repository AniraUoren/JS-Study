var a = +prompt("Введите a");
var b = +prompt("Введите b");

document.getElementById("value_a").innerText = a;
document.getElementById("value_b").innerText = b;

if (a>0 && b>0){
    document.getElementById("result").innerText = a - b;
} else if(a<0 && b<0){
    document.getElementById("result").innerText = a * b;
} else if (a>0 && b<0 || a<0 && b>0){
    document.getElementById("result").innerText = a + b;
}else if (isNaN(a)||isNaN(b)||a==0||b==0){
    document.getElementById("result").innerText = "Неверные значения переменных. Обновите страницу для повторного ввода переменных.";
}