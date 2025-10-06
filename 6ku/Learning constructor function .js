function factory(name, ages) {

    return {
        name,
        ages,
        greet() {
            return `My name is ${this.name} and I'm ${this.ages} years old`
        }
    }
}

let handleFunction = factory('didier', 23);
console.log(handleFunction)
console.log(handleFunction.greet())

let handle = factory('James', 25);
console.log(handle)