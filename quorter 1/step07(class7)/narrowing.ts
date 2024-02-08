//NARROWING

//EXAMPLE 01:
// let a: string | number;
// a = "abdul";
// console.log(a); //narrow
// console.log(a.toUpperCase());

// a = 23;
// console.log(a); //narrow
// console.log(a.toFixed(2));

//EXAMPLE 02;
// function getType(val: string | number) {
//   if (typeof val === "string") {
//     return val.toUpperCase;
//   }
//   return val.toFixed(2) + 2;
// }

// // EXAMPLE 03;
// function getId(id: string | null) {
//   if (!id) {
//     console.log("Invalid ID");
//     return
//   }
//   return id.toLowerCase()
// }
