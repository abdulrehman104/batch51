"use strict";
// let temperature: number = 26;
// let issunny: boolean = true;
// let hasraincoat: boolean = false;
//             //    LOGICAL && AND 
// if (temperature > 20 && issunny) {
//     console.log("It was a warm and sunny day")
// }else {
//     console.log("It was mot a warm and sunny day")
// }
//             // LOGICAL || OR
// if(temperature < 30 || issunny){
//     console.log("It's either a hot day or a sunny day")
// }else{
//     console.log("It's not a hot day or a sunny day")
// }
//             // LOGICAL ! NOT 
// if(!hasraincoat){
//     console.log("You don't have a raincoat");
// }else{
//     console.log("You have a raincoat");
// }
//               // ADD ALL LOGICAL OPERATORS
// let isWeekand: boolean = true;
// let isHoliday: boolean = false;
//EXAMPLE 1   
// if ((isWeekand || isHoliday) && issunny) {
//     console.log("Its a sunny weekand and holiday")
// } else {
//     console.log("Its not a sunny weekand and holiday")
// }
//EXAMPLE 2
// if((temperature > 26 && isWeekand) || (!issunny && !hasraincoat)  ){
//          console.log("Its a hot day and weekand. Is sunny day but i cant have raincoat ")
//         }else{
//     console.log("Its not a hot day and weekand. Is not sunny day but i dont have raincoat ")
// }
let temperature = 25;
let isRaining = false;
if (temperature > 30) {
    console.log("It's a hot day!");
    if (isRaining) {
        console.log("But it's also raining. You might want an umbrella.");
    }
    else {
        console.log("And it's not raining, so enjoy the sunshine!");
    }
}
else if (temperature >= 20 && temperature <= 30) {
    console.log("It's a pleasant day!");
    if (isRaining) {
        console.log("You might want to carry an umbrella.");
    }
    else {
        console.log("No need for an umbrella. Enjoy the weather!");
    }
}
else {
    console.log("It's a cold day.");
    if (isRaining) {
        console.log("Bring an umbrella and dress warmly.");
    }
    else {
        console.log("Dress warmly, but at least it's not raining!");
    }
}
