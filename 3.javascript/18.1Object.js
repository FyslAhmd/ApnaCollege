let student = {
    name : "Faysal Ahmed",
    age : 23,
    marks : 90
};
console.log(student)

console.log(student["name"])
console.log(student.name)

student.name = "Patwary"
console.log(student)

student.cgpa = 4.00
console.log(student)

delete student.age
console.log(student)

const result = {
    faysal: {
        age : 23,
        grade : 4.00
    },
    eva: {
        age : 24,
        grade : 3.9
    },
    shakib: {
        age : 24,
        grade : 3.5
    }
};
console.log(result)
console.log(result.faysal.grade)