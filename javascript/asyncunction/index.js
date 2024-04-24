
const fs = require('fs');

//Asynchronous Functions

function callback() {
    console.log("hello settimeout")
}
setTimeout(callback,5000);  // Asynchronous function

// function callbackfs( err, data){
//     console.log(data,err);
// }

// fs.readFile("ab.txt", "utf-8", callbackfs)

fs.readFile("a.txt", "utf-8",function (err, data){
    setTimeout(() =>{
        console.log(data)
    },6000)
   
})
