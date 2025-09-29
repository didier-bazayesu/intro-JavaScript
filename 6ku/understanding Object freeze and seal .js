

let object = {
    a: 1, b: 4
}

Object.freeze(object);
object.age = 20;
object.a = 20;
console.log(object)