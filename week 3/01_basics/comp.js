console.log(2>1);
console.log(2<1);
console.log(2==1);
console.log(2!=1);
console.log(2>=1);


console.log("2">1); //dt should same , clean code
console.log("02">1); //data type schould be same otherwise the result cant be predictble

console.log(null>1); //aviod
console.log(null ==0); //aviod
console.log(null >=0); //aviod

console.log(undefined ==0); //aviod
console.log(undefined <0); //aviod
console.log(undefined >0); //aviod

// ===

console.log("2" == 2);
console.log("2" === 2); //it also check dt so it return false
