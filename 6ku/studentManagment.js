

// Create a Student class with:

// Add a method averageGrade using an arrow function that calculates the average of grades

class Student {
    constructor(name, age = 18, grades = []) {
        this.name = name;
        this.age = age;
        this.grades = grades
    }

    averageGrade = () => {
        return this.grades.reduce((x, y) => x + y, 0) / this.grades.length
    }
}

const studentsArray = [
    new Student('Alice', 20, [70, 80, 90]),
    new Student('Bob', 19, [50, 40, 60]),
    new Student('Claire', 22, [95, 100, 90])
];

const passedStudents = studentsArray.filter(student => student.averageGrade() >= 60);
passedStudents.forEach(el => {
    console.log(`name: ${el.name} and average : ${el.averageGrade()}`)
})