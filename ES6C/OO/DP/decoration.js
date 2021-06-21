let loggegIn = false;

function callrAutheticated(fn){
    return !!loggegIn &&  fn()
}

function sum(a,b ){
    return a + b; 
}

console.log(callrAutheticated(() => sum(2,3)));
loggegIn = true;
console.log(callrAutheticated(() => sum(2,3)));
loggegIn = false;
console.log(callrAutheticated(() => sum(2,3)));
