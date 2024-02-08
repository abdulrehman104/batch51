              // ARRAY 
let arr:string []= ["ARehman","Husnain","Huzaifa","Moiz",]
console.log(arr);

              //FIND LENGHT
console.log(arr.length);

              // FIND INDEX
console.log(arr[0]);
console.log(arr[2]);
console.log(arr[2]);
console.log(arr[3]);
console.log(arr[4]);

// DEFINE ARRAY FROM DIFFERENT METHODS




// ARRAY: REMOVING, INTERESTING, AND EXTRACTING ELEMENTS.  
// ARRAY METHODS
let arr1: string[] = ["fareed", "lukman", "imran", "rehman"] 
console.log(arr1 );

// POP METHOD 
arr1.pop()                              // pop method array se last element remove kr deta he 
console.log(arr1);                      // array mn se element ko remove krke new array ko return kr dega 
console.log(arr1.pop());                // array ka jo element remove hoga console krne pr remove element return kre ga   


// PUSH METHOD  
 arr1.push("abdul")                     // ham ne ak function bnaya usmn wo data pass keya jo array ke start mn store krna tha
 console.log(arr1);                     // phr arr1 ko console krwa deya our abdul array ke end mn add ho gya 
 console.log(arr1.push("abdul"));       // jo hamare new array bne he uske length btaye ga 


// SHIFT METHOD 
arr1.shift()                            // shift method array ke first element ko remove kr dega 
console.log(arr1);                      // array mn se element ko remove krke new array ko return kr dega
console.log(arr1.shift());             // array ka jo element remove hoga console krne pr remove element return kre ga 

// UNSHIFT METHOD 
arr1.unshift("Hamza")                  // ham ne ak function bnaya usmn wo data pass keya jo array ke start mn store krna tha
console.log(arr1);                     // phr arr1 ko console krwa deya our Hamza array ke start mn  mn add ho gya 
console.log(arr1.unshift("Hamza"));    // array ke length ko btaye ga


// Splicing and Slicing Arrays
const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits.slice(1); // [Orange,Lemon,Apple,Mango]
console.log(citrus)       

const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus1 = fruits.slice(1,3); // [Orange,Lemon,Apple,Mango]
console.log(citrus)       

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits)       

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits[0])       
console.log(fruits[1])       
console.log(fruits[2])       
console.log(fruits[3])       





