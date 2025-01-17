//if statement

//if(condition)
    //condition should be true then the code will be exexcuted


const temprature =42
if(temprature < 50)

{
    console.log("temp is less than 50");
}
else 
{
    console.log("temprature is greater thans 50")
}
// 2<=2 
//< >   >=  == <= !=

//va should be in scope

// const score = 300
// if(score > 200)
// {
//     let power ="fly"
//     console.log(`user power: ${power}`);
// }


// const balance = 100

// if (balance > 500) {
//     console.log("you can withdraw money")
// }
// else if (balance < 200)
//     {
//     console.log("you can't withdraw money")
// }
// else{
//     console.log("you can transit money");
// }





const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true
// if(userLoggedIn && debitCard && balance > 500)// error beacuse last one is not defined
{
console.log("Allow to buy course");
}
if(userLoggedInFromGoogle || userLoggedInFromEmail)
{
    console.log("Allow to buy course");
}