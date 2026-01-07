function handleCallback(number1,number2,callback){
    callback(number1,number2);
    
}

function add(number1,number2){
    return number1+number2;
}

function subtract(number1,number2){
    return number1-number2;
}

function multiply(number1,number2){
    return number1*number2;
}

function divide(number1,number2){
    return number1/number2;
}
console.log(handleCallback(10,5,add));
console.log(handleCallback(10,5,subtract));
console.log(handleCallback(10,5,multiply));
console.log(handleCallback(10,5,divide));
