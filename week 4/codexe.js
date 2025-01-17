// javascript execution context ..it have 2 phase 
// 1.global execution context window obj is the value execute in thread .and
// 2.functional execution context
// in mongos 3.eval execution context
// memory creation phase {}
// execution phase 
let val1= 10
let val2= 5
function addNum(num1 , num2)
{
    let total = num1+num2
    return total
}
let result1 = addNum(val1, val2)
let result2 = (10, 2)

/* 1 global exe->allocate into this
 2  memory phase variable ikkatha and store value as undefined 
 addnum it holds function defination 
 result 1 and 2 holds undefined this is called the first cycle
 3.exexcution phase val1=10 val2=5 for addnum new context will be created(variable env+ exex thread)
 in context there will be an memory phase and execution phase create diff val*/

 //call stack lifo global exe | one()|two()|three()|


