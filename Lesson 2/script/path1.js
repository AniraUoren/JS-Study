var a = 1, b = 1, c, d;

c = ++a;
document.getElementById("str_2").innerHTML = c;

d = b++;
document.getElementById("str_3").innerHTML = d;

document.getElementById("interValue_a").innerText = a;
document.getElementById("interValue_b").innerText = b;
document.getElementById("interValue_c").innerText = c;
document.getElementById("interValue_d").innerText = d;

c = (2+ ++a);
document.getElementById("str_4").innerHTML = c;

d = (2+ b++);
document.getElementById("str_5").innerHTML = d;

document.getElementById("endValue_a").innerText = a;
document.getElementById("endValue_b").innerText = b;
document.getElementById("endValue_c").innerText = c;
document.getElementById("endValue_d").innerText = d;