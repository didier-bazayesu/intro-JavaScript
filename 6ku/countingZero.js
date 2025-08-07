//counting zero in a number


function countZero(zero) {
    let count = 0;


    while (zero > 9) {

        zero = Math.floor(zero / 10)
        count++

    }

    return count;

}

console.log(countZero(1000))