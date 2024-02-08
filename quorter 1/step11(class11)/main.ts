
// class House {
//   numberOfRooms: number = 4;
//   numberOfBathRoom:number = 1;
// }


// let house1 = {
//   numberOfRooms: (number = 4),
// };

// let house1 = {numberOfRooms: (number = 4),};
// let house1 = {numberOfRooms: (number = 4),};
// let house1 = { numberOfRooms: (number = 4)};

// is tra agr ham bar bar new object bnaye to code readable nhi rhe ga and samaj nhi ayega is liye class use krte hn code ko readable krne ke liye

// let house1 = new House();
// let house2 = new House();
// let house3 = new House();
// let house4 = new House();
// console.log(house1);

// // Example
// class House {
//   numberOfRooms: number = 4;
//   numberOfBathRoom: number = 1;
// }

// let house1 = new House();
// console.log(house1);
// console.log(house1.numberOfRooms);

// properties === key value pairs.

// class samajne ke liye
// class House {
//   numberOfRooms: number = 4;
//   numberOfBathRoom: number = 2;
//   constructor() {
//     console.log("Hello constructor");
//   }
// }
// let house1 = new House()
// console.log(house1);

// update person into dynanmic way.
class House {
  readonly numberOfRooms: number ;
  readonly numberOfBathRoom: number ;
  constructor(noOfRooms: number, noOfBathrooms: number) {
    // console.log(noOfRooms, noOfBathrooms);
    this //this = {}
    this.numberOfRooms = noOfRooms
    this.numberOfBathRoom = noOfBathrooms
  }
  doorBell (){
    console.log('Bll Pressed');    
  }

}
//  line 59,                  line 63
// {numberOfBathRoom:4, numberOfRooms:2}
let house1 = new House(4,2)
let house2 = new House(3,1)

// house1.numberOfBathRoom = 1

console.log(house1);
console.log(house2);
house1.doorBell




// // // class task
// class Person {
//   name: string;
//   age: number;
//   readonly gender:string="male";
//   constructor(nOfName: string, nOfAge: number, nOfGender: string) {
//     this.name = nOfName;
//     this.age = nOfAge;
//     this.gender =nOfGender;
//   }
//   // class ke andar koye function bnane he to usko object oriented ke ander method khete hn
// }

// let person1 = new Person("ABDULREHMAN", 19, "male");
// let person2 = new Person("Atif", 16, "male");

// // person2.gender="shemale";    // ERRORcsolve to change tsconfig file line 66 un comment no emit

// console.log(person1);
// console.log(person2);










// class Person{

//     constructor(name:string , age:number , clas:string , batch:string){
//         this.name = name
//         this.age = age
//         this.clas = clas
//         this.batch = batch
//     }
//     name : string = ""
//     age : number = 0
//     clas :string = ''
//     batch :string = ''

//     walking(){
//         console.log('person is walking');

//     }

//     sleeping(){
//         console.log('person is sleeping');

//     }

// }

// class IronMan extends Person{
//     constructor(name:string , age:number , clas:string , batch:string , ironManPowers:boolean){
//         super(name , age ,clas , batch)

//         this.ironManPowers = ironManPowers
//     }
//     ironManPowers :boolean = false

//     attacking(){
//         console.log('íron man attacked');
//     }

//     warning(){
//         console.log('íron man warning to attack you');

//     }
// }

// // let person1 = new Person('abdul rehman' , 19 , 'PIAIC' , '51')

// // console.log(person1);

// // person1.walking()
// // person1.sleeping()/

// let ironMan1 = new IronMan('shakti' , 200 , 'iron' , 'shakti training', true)

// console.log(ironMan1);





// // Inheretence three tyeps
// // 1- single
// single mn ak class hote he
// // 2- multie
// multi mn 2 classis hote hn
// // 3- herarchial

// excalidraw.com

// class Person{
//     name :string = "abdulrehman"
//     constructor(name:String){
//         // this.name = name
//     }
// }

// class Person1 extends Person {
// //   name: string;
//   salary: number = 100000;
// //   constructor(name: string, salary: number) {
// //     // this.name = name;
// //     this.salary = salary;
// //   }
// }

// class Person2 {
//     // name: string;
//     hobby: string;
//     constructor(name: string, hobby: string) {
//     //   this.name = name;
//       this.hobby = hobby;
//     }
//   }

//   let person1 = new Person1("abdulrehman",10000)
//   let person2 = new Person2("abdulrehman","web developer")

// common chizon ke ak alag class bna lenge and un dono ko bake class ke sath extand krwa denge

// class Person {
//   name: String;
//   age: number;
//   constructor(name: String, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }

// class Teacher extends Person {
//   salary: number;
//   constructor(name: string, age: number, salary: number) {
//     // constructor call kre ge super se
//     super(name, age);
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//   }
// }

// class Student extends Person {
//   rollNumber: number;
//   constructor(name: string, age: number, rollNumber: number) {
//     super(name, age);      // person constructor
//     this.rollNumber = rollNumber;
//     this.name = name;
//     this.age = age;
//   }
// }
// let teacher = new Teacher("hamzah", 20, 20000);
// let student = new Student("okasha", 20, 12345);

// console.log(teacher);
// console.log(student);














let my = 1234
console.log(my);

