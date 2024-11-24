// data types are of 2 types mainly
// 1.primituve

/*
7 catagories :
 1.string
 2.number
 3.boolean
 4.null
 5.undefined
 6.symbol (used for making value unique)
 7.bigint

 
 2. non premmitive{ reference type}

 array
 object
 function

 */
const score = 100
const scoreValue = 100.4
 const isLoggedIn = false
 const outSideTemp = null
 let userMail;
  const id = Symbol('123')
  const anotherId = Symbol('133') 
  console.log(id === anotherId); //type symbol

  const heros =  ["shaktiman", "nagraj", "doga"]

  //declaretion of values
  let myObj = { // we can use variabLe to store

    name: "snigdha",
    age: 20, //obj
  }

  //decl fun
  //we can decl a fun in js as a var

  const myFunction = functon() //obj function
  {
    console.log("Hello world");
  }
  //data type paat kaise karen

  console.log(typeof outSideTemp); // object