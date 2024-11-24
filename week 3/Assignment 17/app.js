let array = [1, 2, 3, 4, 5, 12,1234];

let evenNumbers = [];

for (let number of array) {
    if (number % 2 === 0) {
        evenNumbers.push(number);
    }
}

console.log("Even numbers:", evenNumbers);