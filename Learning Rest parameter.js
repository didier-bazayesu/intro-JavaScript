function handleRestParameter(num1, ...other) {

    let output = num1;
    for (let i = 0; i < other.length; i++) {

        output = output.concat(other[i]);
    }

    return output;
}

console.log(handleRestParameter('d', 'i', 'd', 'i', 'e', 'r'));