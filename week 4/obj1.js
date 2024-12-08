const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "a", 4:"b"}

// const obj3 =  {obj1,obj2}// cant merge
Object.assign(obj1,obj2) //for merge or concat here obj1 and obj2 are source
//for assignining obj we use assign
const obj3 = {...obj1,...obj2} //easy
console.log(obj3);


const users = [
    {
        id : 1,
        email : "snigh7@gmail.com"
    }
]

users.concat 
users[1].email //[1] is access object
console.log(users);