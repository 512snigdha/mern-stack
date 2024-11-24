let numbers = [];
for (let i = 0; i <=4 ; i++) 
    {
    let number = parseInt(prompt("Enter number " + (i + 1) + ":")); //d
    numbers.push(number);
}


let sum = 0;
for (let sum of numbers) {
    sum += num; 
}

alert(`Sum of numbers:  ${sum}` );