
class Person {

    constructor(name, ages) {
        this.name = name;
        this.ages = ages
    }
    greet() {
        return `hello ${this.name}
        with ${this.ages} ages `
    }

    set change(newNames) {
        if (this.name.length < 4) {
            this.name = newName;

        }
    }
}
person1.change = 'waguan'
let person1 = new Person('gr', 20);
console.log(person1)
