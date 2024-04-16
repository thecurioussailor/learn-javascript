// CALLBACK

// funfact : DRY - DONT REPEAT YOURSELF


function square(a){
    return a*a;
}

function cube(a){
    return a*a*a;
}

// function ssum (a,b, callback){                // higher order function ssum
   
//     return callback(a) + callback(b);
// }

// function ssum (a,b){                // higher order function ssum
//    let value1 = cube(a);
//    let value2 = cube(b);
//     return value1 + value2;
// }
function ssum (a,b, callback){                // higher order function ssum
    let value1 = callback(a);
    let value2 = callback(b);
     return value1 + value2;
 }
let result = ssum(2,3, cube); // higher order function ssum and callback function = cube
console.log(result);