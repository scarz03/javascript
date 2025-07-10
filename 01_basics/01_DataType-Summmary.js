// Primitive data types (call by value)
// Number, BigInt, String, Boolean, Symbol, Null, Undefined

// Non Primitive (Call by reference)
// Arrays, Object, Functions
// you can store any data types in variables

// Array
// MyArr = ["affan", "is", "practicing"]

// //let MyArr = ["affan", "is", "practicing"]
// console.log(typeof MyArr)

// // Object

// MyObj = {

//     name : "affan",
//     age : 192,
// }

// console.log(typeof MyObj)

// // Function

// MyFunc = function(){
//     console.log("You entered the Function")
// }

// console.log(typeof MyFunc)


// XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX

// Stack (Primitive), Heap (non-primitive)

let Myname = "affan"
let OtherName = Myname
OtherName = "asad"

console.log(Myname)
console.log(OtherName)

// Here Myname = affan is stored in stack first then OtherName gets a copy of Myname and changes it to asad
// therefore variables stored in stack passes value

User1 = {

    name : "affan",
    email : "affan123@gmail.com" 
}

let User2 = User1
User2.email = "asad123@gmail.com"

console.log(User1.email)
console.log(User2.email)

// Now the email of user1 was stored in a heap and when email of user2 was modified, it changed the email of user1 from the heap 
// mtlb it didint change a copy of user1 but the original email of user1
// this is pass by reference  
 