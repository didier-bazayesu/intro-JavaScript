class Parent {
    constructor(name) {
        this.name = name;
    }
}

class Child extends Parent {
    constructor(name, age) {
        // ❌ Missing super()
        this.age = age; // ReferenceError: Must call super constructor
    }
}
