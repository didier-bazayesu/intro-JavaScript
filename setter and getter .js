
class Person {

    constructor(name, age) {
        this.age = age;
        this.name = name
    }
    get greet() {

        return `i'm ${this.name}and ${this.age} years old`
    }

    set change(string) {
        let final = string.split(' ')
        let [name1, ages] = final;
        if (this.age > Number(ages)) {
            return this.age
            throw Error('you cant update to lower value')
             } else {
            this.age = ages
        }
        this.name = name1;

    }
}

let person1 = new Person('didier', 40)
person1.change = 'claire 41'
console.log(person1.greet)



















