const userEmail = "snigdhaemail"

if(userEmail) {
    console.log("got tha user email");
    }
    else{
        console.log("please enter the email");
    }

    // falsy values
    //  false,0,undefined,null,NaN,bigInt,"",-0

    //  truthy values expect the above all truth val...like true,1,functoin(){},[],"0","false",Infinity,Symbole(""),' '


    if(userEmail.length === 0){
        console.log("Array is empty");
    } //here len ix a property of array , use where teh array is empty or not

    const emptyObj = { }
    if(Object.keys(emptyObj).length === 0){
        console.log("object is empty");
    }

    // || logical operator Or.... && logical operator And
    // nullish coalescing operator ?? : null undefined and ternary opeartor are diff

//     let val1;
//     val1 = 5 ?? 10

// console.log(val1);// op 5


// let val1;
//     val1 = null ?? 10

// console.log(val1);// op 10

// val1 = undefined ?? 17
  
// console.log(val1); // 17

// condition ? true : false
const iceTeaPrice = 200
iceTeaPrice >=38 ? console.log("less then 90") : console.log("more then 700")