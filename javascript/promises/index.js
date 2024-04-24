// // Callback hell
// //Multiple callback functions would create callback hell that leads to unmanageable code.

// // function square(a, callback){                                           // square(3, multiplyBy2)
// //     const value = callback(a);                                          // const value = 6
// //     return value*value;                                                    // return 6*6
// // }

// // function multiplyBy2(a){                                                // multiplyBy2(3)
// //     return 2*a;                                                         // return 2 * 3
// // }

// // function ssum(a,b, callback){                                                // ssum (2,3,square)
// //     return callback(a,multiplyBy2) + callback(b, multiplyBy2);              // return 16 + 36
// // }

// // console.log(ssum(2,3,square));

// //Promises
// //Promises are used to handle asynchronous operations in JavaScript.

// // setTimeout(() =>{
// //     console.log("hiiii")
// // }, 3000);

// //

// // function sum1(a , b , cb) {
// //     return cb(a + b);
// // }

// // function onDone(data){
// //     console.log(data);
// // }

// // sum1(2,3,onDone);

// // function sum(a,b){
// //     let promise = new Promise(function (resolve,reject){
// //     let sum = a + b;

// //         resolve(sum);
// // })
// //   return promise;
// // }

// // function onDone(data){
// //     console.log(data);
// // //     return new error;
// // }

// // sum(2,3)
// //     .then(onDone)
// //                 .catch((error)=>{
// //                     console.log("something is wrong")
// //                 })

// function square(a){                                           // square(3, multiplyBy2)                                          // const value = 6
//         return new Promise(function(resolve, reject){
//             let square1 = a*a;
//             resolve(square1)
//         })                                               // return 6*6
//     }
    
//     function multiplyBy2(a){    
//                                                     // multiplyBy2(3)
//         return new Promise(function (resolve, reject) {
//             resolve(2*a)
//         })                                                         // return 2 * 3
//     }

//     function onDone(data){
//         console.log(data);
//     }
    
//     square(3).then(multiplyBy2).then(onDone);

// biriyani
// veg and non-veg
//step 1 - wash rice then boil it till 60% cooked - 20 mins ---paneer
//step 2 - non-veg biriyani if not 
 //                               -- paneer pulao

//  promise = 1. chicken mile gaya
//            2. nahi mila 
//            3. pending state

// promise 1. fullfilled, pending, reject
 
//Callback way
// function greet(callback){
//     setTimeout(() =>{
//         callback("Okay")
//     },5000);
// }

// function onDone(data){
//     console.log(data);
// }

// greet(onDone);
 

let promise = new Promise(function (resolve, reject) {

    
    setTimeout(()=>{
       resolve("okay");
    // reject("Please try again");
    }, 5000)
    
})

function onDone(data){
    console.log(data);
}

setTimeout(() => {
    console.log("I am not promise!")
},4000)
console.log(promise);
setTimeout(() => {
    console.log("I am not promise part 2!")
},5000)
console.log(promise);

promise.then(onDone).catch((err)=>{
    console.log(err)
});


console.log(promise);










