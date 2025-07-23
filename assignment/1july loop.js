for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// While loop: 10 down to 1
let j = 10;
while (j >= 1) {
    console.log(j);
    j--;
}

// Do_while loop: 1 to 5
let k = 1;
do {
    console.log(k);
    k++;
} while (k <= 5);


// Even numbers 1 to 50
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) console.log(i);
}

// Odd numbers 20 to 50
for (let i = 20; i <= 50; i++) {
    if (i % 2 !== 0) console.log(i);
}

// Numbers divisible by 3 from 1 to 30
for (let i = 1; i <= 30; i++) {
    if (i % 3 === 0) console.log(i);
}


// Sum from 1 to 100
let sum1to100 = 0;
for (let i = 1; i <= 100; i++) {
    sum1to100 += i;
}
console.log("Sum 1-100:", sum1to100);

// Product 1 to 10
let product1to10 = 1;
for (let i = 1; i <= 10; i++) {
    product1to10 *= i;
}
console.log("Product 1-10:", product1to10);

// Sum of even numbers 1 to 50
let sumEven1to50 = 0;
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) sumEven1to50 += i;
}
console.log("Sum of even 1-50:", sumEven1to50);

// Sum of squares 1 to 10
let sumSquares = 0;
for (let i = 1; i <= 10; i++) {
    sumSquares += i * i;
}
console.log("Sum of squares 1-10:", sumSquares);


// 1 to 20, skip multiples of 4
for (let i = 1; i <= 20; i++) {
    if (i % 4 === 0) continue;
    console.log(i);
}

// 1 to 10, stop at 7
for (let i = 1; i <= 10; i++) {
    if (i === 7) break;
    console.log(i);
}

// Count numbers divisible by both 3 and 5 between 1 to 100
let countDiv3and5 = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) countDiv3and5++;
}
console.log("Divisible by 3 & 5 count:", countDiv3and5);


// All pairs (i, j) where i, j = 1 to 3
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`(${i}, ${j})`);
    }
}

// All combinations where a + b = 5, 1 ≤ a,b ≤ 4
for (let a = 1; a <= 4; a++) {
    for (let b = 1; b <= 4; b++) {
        if (a + b === 5) {
            console.log(`a=${a}, b=${b}`);
        }
    }
}


// Check if a number is prime
function isPrime(n) {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;
    }
    return true;
}
console.log("Is 17 prime?", isPrime(17));

// Factorial of a number
function factorial(n) {
    let fact = 1;
    for (let i = 2; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log("Factorial of 6:", factorial(6));

// Reverse of a number
function reverseNumber(num) {
    let rev = 0;
    while (num > 0) {
        rev = rev * 10 + (num % 10);
        num = Math.floor(num / 10);
    }
    return rev;
}
console.log("Reverse of 123:", reverseNumber(123));

// Count digits in number
function countDigits(num) {
    let count = 0;
    do {
        count++;
        num = Math.floor(num / 10);
    } while (num > 0);
    return count;
}
console.log("Digits in 12345:", countDigits(12345));

// Check if number is palindrome
function isPalindrome(num) {
    return num === reverseNumber(num);
}
console.log("Is 121 palindrome?", isPalindrome(121));