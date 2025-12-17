function asynchronousFunction(callback){
    setTimeout(function(){
        callback('Hello World');
    }, 1000);
}
function callbackFunction(message){
    console.log(message);
}
asynchronousFunction(function(message){
    callbackFunction(message);
});
