var val, pow;

function power(val, pow){
    if (pow !=1){
        return (val * power(val, pow-1));
    } else{
        return val;
    }
}

val = +prompt("Введите число, которое нужно возвести в степень");
pow = +prompt("Введите степень");

document.getElementById("value_val").innerHTML = val;
document.getElementById("value_pow").innerHTML = pow;
document.getElementById("result").innerHTML = power(val, pow);

