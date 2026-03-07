function ConstructorFunction (a,b){
    this.a = a;
    this.b = b
   
} 
ConstructorFunction.prototype.getName = function(){
   return this.a + this.b
}

const instance1 = new ConstructorFunction(1,2);
const instance2 = new ConstructorFunction(8,2);
console.log(instance2.getName());
