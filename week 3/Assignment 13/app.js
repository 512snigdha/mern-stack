

let array = [10,20,30,40,50,60,70];

toSearch = parseInt(prompt("enter the number you want to search : "));
let index = -1;
for(let i = 0; i < array.length;i++){
    if(array[i]==toSearch){
        index=i;
        break;
    }
}
if(index!==-1){
    console.log("index of " + toSearch  + ":" + index);
}else{
    console.log("value that is " + toSearch + "not found in the array" );
}