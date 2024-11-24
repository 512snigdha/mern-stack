const num1 = parseInt(prompt("Enter the first number:"));
const num2 = parseInt(prompt("Enter the second number:"));


let add = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = (num1 / num2);

alert(
  `Results:
  Addition: ${add}
  Subtraction: ${sub}
  Multiplication: ${mul}
  Division: ${div}`
);