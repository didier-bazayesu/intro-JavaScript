class Singletone {
    constructor(name) {
        if (Singletone.instance) {
            return Singletone.instance
        }

        this.name = name;
        Singletone.instance = this;

    }
}

let first = new Singletone('didier');
let last = new Singletone('menu')
console.log(last);