function * functionGenerator(){
    let a = yield 1
    let b = yield 2
    yield a + b
    yield a - b
    console.log('Generator finished');
}
let generator = functionGenerator();
console.log(generator.next().value);
console.log(generator.next(3).value);
console.log(generator.next(4).value);
console.log(generator.next().value);
console.log(generator.next().value);
