// CALLBACK

// funfact : DRY - DONT REPEAT YOURSELF


function square(a){
    return a*a;
}

function cube(a){
    return a*a*a;
}

function ssum (a,b, callback){                // higher order function ssum
   
    return callback(a) + callback(b);
}

let result = ssum(2,3,cube); // higher order function ssum and callback function = cube
console.log(result);