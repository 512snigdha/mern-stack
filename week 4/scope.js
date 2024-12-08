let a= 10
const b = 20 // global
var c = 30
if(true) {} //scope of the prg

console.log(a);
console.log(b);
console.log(c);



/////or..

if(true) {

 // local 
    let a= 10
    const b = 20
    var c = 30
    
}
 console.log(c);