//mem 2 types 1.stack (in all prirmitive type stack is used) and 2.heap(in all non prirmitive type heap is used)

//example 
let myYoutubeName = "snidghaytcom" //primt value goes in stack.

let anotherName = myYoutubeName
 anotherName = "snigdhayttcom"
 console.log(myYoutubeName);
 console.log(anotherName);


 let userOne = {
    email: "user@gogle.com",
    upi:"user@ybl"
 }
 let userTwo = userOne 
  //object is accsesed by dot(.)

  userTwo.email = "snigdha@ggl.com" 
  console.log(userOne.email);
  console.log(userTwo.email);