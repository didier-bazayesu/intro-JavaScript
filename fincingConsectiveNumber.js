

///analyse question
function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] !== arr[i - 1] + 1) {
            return arr[i]; // Found the first non-consecutive number
        }
    }
    return null; // All numbers are consecutive
}


//finding the consective number

function changeArray(arr) {
    if (arr.length >= 2) {
        let c = arr.filter((elem, index, arr) => {
            return elem + 1 === arr[index + 1] || elem - 1 === arr[index - 1]
        });

        return c.length >= 1 ? true : false
    }
    return false;
}

console.log(changeArray([1, 2, 3, 4, 5, 7]));
