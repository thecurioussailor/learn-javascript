

// JavaSript is a single-threaded language

// Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. Tasks can run simultaneously. 
// Synchronous is a blocking architecture, so the execution of each operation depends on completing the one before it. 
// Each task requires an answer before moving on to the next iteration.
const fs = require('fs');
function greet(){
    console.log("Hello");
}
function looping() {
    let a = 0;
    for(let i = 0; i < 1000000000; i++){

        a = a + 2;
    }
    console.log(a);
}


console.log("first");
fs.readFile("../filereading/a.txt", "utf-8", function (err, data) {
    console.log(data);
})

setTimeout(function () {
    console.log("I am setTime out")
},100);
console.log("second");
looping(); // synchronous function
greet();
console.log("third");

// fs function is an asynchronous function



