function operation(a,b,callback){
    return callback(a,b);
    console.log('Operation finished');
}

let add = (a,b) => a+b;
let subtract = (a,b) => a-b;

