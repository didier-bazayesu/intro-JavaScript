function flickSwitch(arr) {
    let array = []
    let state = true;
    for (let i = 0; i < arr.length; i++) {


        if (arr[i] === 'flick') {
            state = !state
            array.push(state)
        } else {
            array.push(state)
        }

    }
    return array;

}

console.log(flickSwitch(['chocolate', 'flick', 'adventure', 'sunshine']))