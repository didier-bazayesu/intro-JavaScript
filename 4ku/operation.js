function operation(a,b,callback){
    return callback(a,b);
    console.log('Operation finished');
}

let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let divide = (a,b) => a/b;



