"use strict";
// interface Deal1  {
//     food: string,
// }
// type Deal2 = {
//     food: string,
//     drink: string
// }
// let hamzahOrder: Deal1 = {
//     food: "Biryani"
// }
// let okashaOrder: Deal2 = {
//     food: "Biryani",
//     drink: "Coke"
// }
// let a = 22
// let b = "22"
// a = b // Error
// console.log(a) // "22"
// hamzahOrder = okashaOrder; // NO ERROR
// okashaOrder = hamzahOrder; // ERROR - MISSING PROPERTY
// interface Ball {
//     diameter: number;
// }
// interface Sphere {
//     diameter: number;
// }
// type Tube = {
//     diameter: number;
//     length: number;
// }
// let ball: Ball = { diameter: 10 };
// let sphere: Sphere = { diameter: 20 };
// sphere = ball;
// ball = sphere;
// type Tube = {
//     diameter: number;
//     length: number;
// }
// let tube: Tube = { diameter: 12, length: 3 };
// interface Ball {
//     diameter: number
// }
// let ball:Ball = { diameter: 10, length: 5 }; // Fresh - Can't provide extra properties
// ball = tube // Stale Object: Ignoring Extra properties 
let myType = { id: 2, name: "Tom" };
let myType2 = { id: 2, name: "Tom" };
//Case 1
myType = myType2;
