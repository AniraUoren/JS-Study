var a, b, result;

function summ(a1, a2) {
    return (parseInt(a+b));
}

function subt(a, b) {
    return (parseInt(a-b));
}

function mul(a, b) {
    return (parseInt(a*b));
}

function mathOperation(arg1, arg2, operation){
    switch (operation) {
        case "summ":
            return (summ(arg1, arg2));
            break;
        case "subt":
            return (subt(arg1, arg2));
            break;
        case "mul":
            return (mul(arg1, arg2));
            break;
    }
}

a = +prompt("Введите число a");
b = +prompt("Введите число b");

if (a>0 && b>0){
    result = mathOperation(a, b, "subt");
    document.getElementById("result").innerHTML = result;
} else if(a<0 && b<0){
    result = mathOperation(a, b, "mul");
    document.getElementById("result").innerHTML = result;
} else if (a>0 && b<0 || a<0 && b>0){
    result = mathOperation(a, b, "summ");
    document.getElementById("result").innerHTML = result;;
}else if (isNaN(a)||isNaN(b)){
    document.getElementById("result").innerHTML = "Некорректный ввод переменных. Обновите страницу.";
}

document.getElementById("value_a").innerHTML = a;
document.getElementById("value_b").innerHTML = b;