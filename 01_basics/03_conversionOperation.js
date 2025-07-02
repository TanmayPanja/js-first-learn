let score="33"

console.log(typeof score); // output is string
console.log(typeof(score)); // output is string

let valueInNumber = Number(score) //  convert string into number
console.log(typeof valueInNumber); // output is number


// "30" => 30
// "30abc" => NaN
// true =>1; false => 0

let isLoggedIn=1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn); // output is true

let isPresent;
let booleanisPresent = Boolean(isPresent)
console.log(booleanisPresent); // output is false

let someNumber=33
console.log(typeof someNumber); // output is number


let anotherNumber=45

let stringNumber = String(anotherNumber)
console.log(typeof stringNumber); // output is string