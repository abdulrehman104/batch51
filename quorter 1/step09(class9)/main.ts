
// // FUNCTION:
// // example 01
// function sum() {

//     console.log(2 + 4);

// }
// sum()
// console.log(sum());
// console.log(sum);

// // example 02
// function sum1() {
//     return 1 + 2
// }
// sum()                       // jab hame function ko return krna hokga to ak variable mn add krke console kre ge.
// let result = sum()
// console.log(++result);


// // example 03:
// function sum2() {
//     1 + 2
//     1 + 2
//     1 + 2
//     1 + 2
//     1 + 2

// // return kuch nhi keya is waja se undefined a rha he 

// }
// console.log(sum2());


// // example 4:
// function sum2 (num1:number, num2:number){
//     return num1 + num2
// }
// let result1 =  sum2(3 , 4)
// console.log(result1);


//  concetitation
// function sum(num1: number, num2: number): number {
//     return num1 + num2
// }
// let result = sum(23, 43)
// console.log(result);








// ANONYMOUS FUNCTION 
// function(){}

// exampple 01:
// let sum = function (num1: number, num2: number): number {
//     return num1 + num2
// }
// sum(12, 32)



//  EXPLECIT TYPE:
//type Sum = (num1: number, num2: number) => number;

// EXAMPLE 1
// let sum: Sum = function (num1, num2) {
// // let sum: Sum = function (num1, num2 , num3) { // error jo type denge us se zyada parameter nhi de sakte
// return num1 + num2
// }
// sum(12, 32)


// type jitne bhi define krte hn ak parameter pr bhi code chal jata he 
// let sum: Sum = function (num1) {
//     return num1 
// }
// sum(12)

// type is liye use krte hn ke function mn ytpe na dene pre and code clean ho 

// type Sum = (num1: number, num2: number) => number;
// // ye ak placeholder he jo sirf data type dekhta he 
// let add: Sum = function (num1, number2) {
//     return num1 + number2
// }
// let result = add(12, 32)
// console.log(result);

// ARROW AND LAMDA FUNCTION
// let sum = () => { }     // arrow function

// method 1:
// let sum =(num1:number,num2:number):number =>{
//     return num1 + num2 
// }

// method 2:
// // arrow ke bad jo value mn agr ham bracket and return na de to wo khud ise return kr dega 
// let sum = (num1: number, num2: number): number => num1 + num2
// let result = sum(3,6)
// console.log(result);



// jis function pr ham bracket lga denge usko return krwana ab ham pr farz. warna answer undefine ayega 
// let sum1 = (num1: number, num2: number): number =>{
//      num1 + num2
//     }
// let result1 = sum1(3,6)
// console.log(result1);


// let sum2 = (num1: number, num2: number): number =>{
//     return num1 + num2
//    }
// let result2 = sum2(3,6)
// console.log(result2);


// let fullName = (firstName : string, lastName:string) =>  firstName + lastName 

// let fullN = fullName("Abdul","Rehman")
// console.log(fullN);



//   OPTIONAL PARAMETERS 
// // HAMARE PARAMETER KO OPTION BNA RHA HE ? IS SE AGR HAM OPTIONAL PARAMETER KE VALUE DEFINE KRE GA TO CHALE GA AND NHI KRE GA TO BHI CHALE GA
// let fullName = ( lastName:string,firstName ?: string) =>  firstName +" " + lastName 

// let fullN = fullName("Abdul")
// console.log(fullN);


// EXAMPLE:
// let fullName = (firstName: string, lastName?: string) => {
//     if (lastName === undefined) {
//         return firstName
//     }
//     else {
//         return firstName + " " + lastName
//     }
// }
// // let fullN = fullName("Abdul")    // if condition is true
// let fullN = fullName("Abdul", "rehman")   // else condition is false
// console.log(fullN);



// // EXAMPLE: default function
// // ismn ham ham optional value use nhi kr sakte because ye wese he optional hota he
// let fullName = (firstName: string, lastName = "Rehman") => {
//     console.log(firstName, lastName);
//     // return firstName + lastName         
// }
// let fullN = fullName("Abdul", "Rehman")
// // let fullN = fullName("Abdul")   // DEFAULT VALUE REHMAN
// console.log(fullN);   // undefined ayega  because ye function kuch return nhi kr rha




// let value = (num1: number, num2 = 23) => {
//     console.log(num1, num2);
// return 12 + 23
// }
// let result = value(12)           // default value
// // let result = value(12, 23)
// console.log(result);   // undefined ayega  because ye function kuch return nhi kr rha



//  REST PARAMETER :
// rest mn ham bohat sare data types ak function mn use kr sakte hn 
// console.log(1,[],{},"AREFJUJDF.",true);


// normal opertor          //rest parameter    
let makeMessage = (name: string, ...message: string[]) => {

    console.log(message.join(" "))

    // console.log(message.join(","))

    // console.log(message[2]);
    // console.log(message[3]);

}
makeMessage("Ali", " hello", "how", "are", "you")



// // FUNCTION OVERLOADING
// // jab hame function ke ander different combination bnane hote hn to ye method use krte hn
// function add(arg1: number, arg2: number): string  // overload 
// function add(arg1: string, arg2: number): string  // overload 
// function add(arg1: string, arg2: string): string  // overload 
// function add(arg1: any, arg2: any): any {
//     return arg1 + arg2
// }
// // add (1,"abdul")               // case01             
// // add("hamza", 23)              // case02:
// // add("abdul", "rehman")         // case03:
// let result = add(2, 3)                       // error
// console.log(result);






