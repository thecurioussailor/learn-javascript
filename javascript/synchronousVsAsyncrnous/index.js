

// JavaSript is a single-threaded language

// Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. Tasks can run simultaneously. 
// Synchronous is a blocking architecture, so the execution of each operation depends on completing the one before it. 
// Each task requires an answer before moving on to the next iteration.

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

console.log("second");
looping();
greet();
console.log("third");