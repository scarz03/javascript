// let AccName = "Affan"
// let AccNum = 34

// console.log(AccName + AccNum + 23) //this is not the best way

// console.log(`My name is ${AccName} and my account num is ${AccNum}`) // Best way

// // How to declare a string

// const name = new String("Scarz")
// console.log(name)

// String Functions

// 1. at() returns the character at given index

let MyStr = "The good boy was not always good"
let index = 4

console.log(`at index ${index} the characterm is ${MyStr.at(index)}`)
//output 'g'

// 2. chatAt()
index = 5
console.log(`The character at index ${index} is ${MyStr.charAt(index)}`)
//output : o

// 3. endsWith()
console.log(MyStr.endsWith("good"))
//output : true

// 4. includes
console.log(MyStr.includes("not"))
// output : true

//**  5. indexOf() : gives the position of the given word , opposite for indexOfLast()
const sentence = "This dog is better than that dog"
const searchWord = "T"
const indexOfFirst = sentence.indexOf(searchWord)

console.log(`the first "${searchWord}" is at ${indexOfFirst}`)

console.log(`the 2nd "${searchWord}" is at ${sentence.indexOf(searchWord, indexOfFirst + 1 )}`)

// 6. localCompare() 

let a = "affan"
let b = "affan"

console.log(a.localeCompare(b))
