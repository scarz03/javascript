// 2 Types of obj, 1. Singleton, 2. non-singleton
// constructor declared objecs are always singleton, while literally declared are never singleton

// literally defined : 
let Myobj = {
    name : "affan",   // Here 'name' is key and 'affan' is value, 
    age : 18,
    email : "affan123@haha.com",
    isLoggedIn : true,

}

const mySym = Symbol("key1")

console.log(Myobj.email)
console.log(Myobj["email"])

//to create a fuction of an object,

Myobj.greeting = function(){
    console.log("this is affan's object");
}

Myobj.greeting2 = function(){
    console.log(`this is the object of ${this.name}`);
}

console.log(Myobj.greeting())
console.log(Myobj.greeting2())

console.log(Myobj.hasOwnProperty('isLoggedIn'))
console.log(Object.entries(Myobj))


