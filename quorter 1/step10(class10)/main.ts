
// asynchronous:
// • weater ko ap order dete hn and wo hamara order age process krta hai and us order ko complete hone mn time lagta hai us time mn weater dosre kam krta he and jab hamara order ho jata he to wo hame hamara order lake de deta he yha pr weater asyn he.
// • isko jab bhi call krte hn to iske sath ak function bhi use krte hn.
// • aesa kam jo hone pr time leta he wo asyn he.
    
// javascript ke pore ke pore code ke andar jitne bhi synchoronous task hoge wo phele perform kre ga and uske bad asynchoronous tast perform kre ga.

// NETWORK CALL
// WEB APIs

//  EXAMPLE
console.log("first");

// method 01
function printSecond() {
  console.log("second");
}

// callback function    // time
setTimeout(printSecond, 2000);
// // ye second thore se time leke print hoga ye asyn function he

setTimeout(() => console.log("second"), 0);

// arrow,anonymous and collback function.
setTimeout(() => {
  console.log("third");
}, 1000);

console.log("third");











//  EXAMPLE
console.log("first");                                // synchoronous

setTimeout(() => console.log("second"), 0);         // asynchoronous
setTimeout(() => console.log("third"), 500);        // asynchoronous
setTimeout(() => console.log("forth"), 1000);       // asynchoronous

// loop chale ga and time lega
for (let i = 0; i < 1000000; i++) {              //synchoronous
    let b = 0;
}

console.log("fifth");                               //synchoronous





// EXAMPLE

setTimeout(() => {
  console.log("user Profile");
  setTimeout(() => {
    console.log("user post");
    setTimeout(() => {
      console.log("user Pcomments");
    }, 1000);
  }, 2000);
}, 3000);

// 3 sec jab hoge to ye first asynchoronous code chale ga then jab 2 sec hoge to second asynchoronous chale ga then uske 1 sec bad third asynchoronous chale ga.


// PROMISE
// • ak callback function lena and usko chalana agr work thk he to function resolve and reject honge.
// • promise ka matlb he asynchoronous ko ache se handle krna
// • agr koye error aye to reject call krna he agr work thk ho to resolve call kre ge.
// • promise resolve hoga to data ayega then mn
// •  promise reject hoga to data catch mn ayega
// • promise kya he aesa work jo time pr ho wo promise he
let myPromise = new Promise((resolve, reject) => {
  console.log("Promise pending");

  setTimeout(() => {
    let data = ["SARMAD", "YASH"];
    if (data) {
      console.log("promise resolve");
      resolve(data);
    } else {
      console.log("promise reject");
      reject("data fetch error");
      console.log("hello reject");

    }
    // // console.log("promise resolve");
    // console.log("promise reject");
    // // resolve("SARMAD");
    // reject("data fetch error")
  }, 2000);
});

// promise resolve hoga to ye data res mn a jayega
// promise reject hoga to ye data reject mn a jayega

// promise calling.
myPromise
  .then((res) => console.log(res))
  .catch((rej) => console.log(rej));

// myPromise.then().catch()



// FETCH
// data ko fatech krne ke liye use krte hn fetch ko
// https://jsonplaceholder.typicode.com/
let data = fetch("https://jsonplaceholder.typicode.com/users")      // create promise
  .then((res) => res.json())              // readible form mn leke aya
  .then((res) => console.log(res))        // resolve   
  .catch((err) => console.log(err));      // reject
// .finally                                   
console.log("data",data);




async function dataFunc (){
let fetchdata = await fetch("https://jsonplaceholder.typicode.com/users")
let data = await fetchdata.json()
console.log(data);
}
dataFunc()












