function callbackFunction(array, callback){
    for(let i = 0 ; i< array.length;i++) if(callback(array[i])) return true ;
    return false ;
}
console.log(callbackFunction([1,2,3,4,5,6,7], function(num){return num == 4}))
console.log(callbackFunction([1,2,3,4,5,6,7], function(num){return num == 8}))

function callbackFunction(array, callback){
    for(let i = 0 ; i< array.length;i++) if(callback(array[i])) return true ;
    return false ;
}

console.log(callbackFunction([1,2,3,4,5,6,7], function(num){return num == 4}))
console.log(callbackFunction([1,2,3,4,5,6,7], function(num){return num == 8}))
