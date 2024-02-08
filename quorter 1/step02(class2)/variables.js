"use strict";
// // VARIABLES                                 
// let myName: string = "AbdulRehhman"                                 //KOYE CHIZ SUPPOSE KRNE KE LIYE ISKO USE KRTE HN
// console.log(myName)
// const message: string = "Hello, TypeScript!";                      // Once a valye is assinged it can not be reassinnged
// console.log(message);
// var myFri: string = "Hassan"                                       //We can not use var
// console.log(myFri);
// let favGame = "Freefire"
// favGame = "PUBG"      //THIS IS FOtsc R EXAMPLE
// console.log(favGame)
// //   DATA TYPES:
// let myString: string = "Arehman"
// let myNum: number = 104
// let myboo: boolean = true
// let myUndefined: undefined = undefined;
// let anotherUndefined: undefined; // inferred as undefined
// let myNull: null = null;
// let anotherNull: null; // inferred as null
// undefined
// let fullname;
// fullname = 'Abdulrehman'
// console.log(fullname)
// //WITHOUT SPACE PRINT:
// let first = "hassan"
// let last = "Abdulrehman"
// console.log(first + last)
//   ADD SPACE IN CENTER 
let myFirst = "hassan";
let myLast = "Abdulrehman";
console.log(myFirst + ' ' + myLast);
// agr hame apne 
let firstname = "hassan";
let lastname = "Abdulrehman";
console.log(`my name is ${firstname} ${lastname}`);
let firName = "hassan";
let laName = "Abdulrehman";
console.log('my  name  is', firName, laName);
// WRITE NAME IN NEW LINE
let myFirstName = "hassan";
let myLastName = "Abdulrehman";
console.log(`my  name  is 
         ${myFirstName} 
         ${myLastName}`);
// OPPERATORS:
// ARITHMETIC OPERATORS
let a = 10;
let b = 5;
let sum = a + b;
console.log(sum);
let diff = a - b;
console.log(diff);
let mult = a * b;
console.log(mult);
let div = a / b;
console.log(diff);
let expon = a ** b;
console.log(expon);
let reminder = a % b;
console.log(reminder);
let qty = 8;
console.log(qty + 10);
console.log(qty - 1);
console.log(qty * 12000);
console.log(qty ** 12);
console.log(qty % 3);
console.log(qty / 3);
// COMPARISON OPERATORS 
let n = 5;
console.log(n == 5); //== age ka variable baraber he 22 ke
// console.log('5' == 5)     //== se dono value equal kre ga
// console.log('5' === 5)      //values and data type equal hone chahaye 
console.log('5' === '5');
console.log(n === 5);
console.log(n != 5); // ! ko programing mn note hete hn
console.log(n > 8); //greater then
console.log(n < 8); //less then
console.log(n <= 8); //less then and equal to
console.log(n >= 8); //greater then and equal to
let x = 20;
let y = 10;
let isEqual = x == y;
console.log(isEqual);
let isEqualSameInType = x === y;
console.log(isEqualSameInType);
let isNotEqual = x != y;
console.log(isNotEqual);
let isGreater = x > y;
console.log(isGreater);
let isLess = x < y;
console.log(isLess);
let isGreaterEqual = x >= y;
console.log(isGreaterEqual);
let isLessEqual = x <= y;
console.log(isLessEqual);
//ASSINGEMENT OPERATORS
let age = 22;
age += 10;
console.log(age);
age -= 10;
console.log(age);
age *= 10;
console.log(age);
age /= 10;
console.log(age);
// // LOGICAL OPERATORS:
// let isTrue: Boolean = true;
// let isFalse: Boolean = false;
// let andresult : boolean = isTrue & isalse     //LOGICAL END
// let orresult : boolean = isTrue|| isalse      //LOGICAL OR
// let notresult : boolean = !isTrue             // LOGICAL NOT
// TYPEOF OPERATORS
let message = "Hello, TypeScript";
console.log(typeof message);
