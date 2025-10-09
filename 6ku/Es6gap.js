// Write a function renameKeys(obj1, keyMap) that renames object keys based on the provided key mapping.
// function renameKeys(obj, keyMap) {
//   // Your code here
// }

// const person = { fname: "John", lname: "Doe", age: 30 };
// const keyMap = { fname: "firstName", lname: "lastName" };

// console.log(renameKeys(person, keyMap));
// // Expected output: { firstName: 'John', lastName: 'Doe', age: 30 }
const person = { fname: "John", lname: "Doe", age: 30 };
const keyMap = { fname: "firstName", lname: "lastName" };

function renameKeys(obj1, keymap) {
    let obj = {}
    for (key in person) {
        if (key in keymap) {
            obj[keymap[key]] = person[key];

        } else {
            obj[key] = person[key]
        }
    }
    return obj;



}



console.log(renameKeys(person, keyMap))





