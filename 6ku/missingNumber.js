let array = [1, 3, 4, 5, 6, 3];
let obj = {};
let arr = [];
for (elem of array) {

    obj[elem] = (obj[elem] || 0) + 1;
}
for (let key in obj) {
    if (obj[key] > 1) {
        arr.push(Number(key))
    }
}
let max = Math.max(...array);
let min = Math.min(...array);
let newArray = [];
for (min; min <= max; min++) {
    newArray.push(min);
}


let x = newArray.filter(elem => !array.includes(elem));
console.log([...arr, ...x]);




