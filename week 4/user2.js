// const cat = () => {
//     let username = "ansu"
// console.log(this.username);
// } 
// cat( ) //same op by using arrow operator

//for numbers
// const addTwo = (num1,num2) => {
//     return num1+num2 
// }


//or
//const addTwo = (num1,num2) =>  num1+num2 //explicit


//for object
const addTwo = (num1,num2) =>  ({username : "snigdha"}) 


// const addTwo = (num1,num2) => (num1+num2)  //implicit

console.log(addTwo(7,9))