function isPrime(num) {

    if (num === 0 || num === 1) {
        return false;
    }

    if (num === 2) {
        return true;
    }

    for (var i = 2; i * i <= num; i++) {
        if (num % i === 0)
            return false
    }
    return true;

}

var primeNumber = 0;
var displayPrime = 'Простые числа в диапазоне от 0 до 100:';

while (primeNumber <= 100) {
    if (isPrime(primeNumber) === true) {
        displayPrime += ' ' + primeNumber;
    }
    primeNumber++;
}

document.getElementById("result").innerText = displayPrime;