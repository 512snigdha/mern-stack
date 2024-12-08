// singleton

// object literals
//Object.create
const mySym = Symbol("key1")
const jsUser = {
    name: "snigdha",
    age :21,
    email: "snigdha@gmail.com",
    [mySym]: "myKey1",
    location:"odisha",
    isLoggedIn: false,
    lastLoggedInDays: ["Sunday","Saturday"]
}


console.log(jsUser.email) //also a extra methos is there
//console.log(jsuser[email]) //its not defined
console.log(jsUser["email"]) 

//symbol is a data type



console.log(jsUser[mySym]) 
//Object.freeze(jsUser)
jsUser.email = "Snigdha223.com"
console.log(jsUser);

jsUser.greetingTwo = function() {
    console.log(`hello snigdha, ${this.greeting}`); // for ref we use this
}
console.log(jsUser.greetingTwo());