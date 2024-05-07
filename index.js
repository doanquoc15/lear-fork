function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;

    if (number % 2 === 0 || number % 3 === 0) return false;

    let i = 5;
    while (i * i <= number) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
        i += 6;
    }

    return true;
}

function sumOfPrimes(numbers) {
    let sum = 0;
    for (let number of numbers) {
        if (isPrime(number)) {
            sum += number;
        }
    }
    return sum;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

const primeSum = sumOfPrimes(numbers);
console.log("Tổng của các số nguyên tố trong mảng là:", primeSum);
console.log("Change code to add new commit ....");
console.log("New line new code to add commit...");