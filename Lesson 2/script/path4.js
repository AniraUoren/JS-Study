var min = 0, max = 15;
var a = min + Math.random() * (max - min);
var array= [];
var i = 0;

a = Math.round(a);

document.getElementById("value_a").innerHTML = a;

while ((a-1)<15) {
    array[i] = a;
    i++;
    a++;
}

document.getElementById("result").innerHTML = array;