class Person {

    constructor(name, ages) {
        this.ages = ages;
        this.name = name;
    }

    get welcome() {

        return `Hello! my name is ${this.name} and I'm ${this.years} years old`
    }

    set change(newAge) {
        if (this.ages < 18) {
            this.ages = newAge;
        }
    }
}

let person = new Person('didier', 12);
person.change = 20;
console.log(person);