function* action() {
    let action1 = yield 'open the computer'
    console.log('you opened the computer')
    let action2 = yield 'open the app'
    console.log('action done')
    yield;

    return `you opened ${action1} computer and ${action2} application`
}

let program = action()
console.log(program.next().value)
console.log(program.next('Lenovo').value)
console.log(program.next('Vs code').value)
console.log(program.next().value)

