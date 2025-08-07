// Your task is to implement a JavaScript function called
//  createCounter that creates a closure to keep track of a counter
//   variable.The createCounter function should return another function, which
//    we'll call counterFn.

// Each time you invoke the counterFn function, 
// it should increase the counter variable by 1 and 
// return the updated counter value.


function counter(n) {


    return function () {

        n++
        return n;

    }

}
let cout = counter(2)

console.log(cout())
console.log(cout())
console.log(cout())