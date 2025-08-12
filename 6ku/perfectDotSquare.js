function perfectSquare(string) {
    let pattern = /^([.\n]+)$/g

    if (pattern.test(string)) {
        let array = string.split('\n')

        return array.every((_, i, arr) => arr[0].length === arr[i].length) && array[0].length === array.length
    } else {
        return false;
    }




}

console.log(perfectSquare("...\n...\n..."))

'https://www.codewars.com/kata/56269eb78ad2e4ced1000013'