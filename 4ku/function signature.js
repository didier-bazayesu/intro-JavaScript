function translateInput (number){
return typeof number  == "number"? number+4 : typeof number == 'string' ? `hello  ${number}`:number;
}

console.log(translateInput(2333));
console.log(translateInput("hell0"));