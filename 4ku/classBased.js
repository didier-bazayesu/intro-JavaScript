function ConstructorFunction (a,b){
    return   a+b;
} 
ConstructorFunction.prototype.getName = function(){
   return this.a + this.b
}

const instance1 = new ConstructorFunction(1,2);
console.log(instance1.getName());