class Student {
    name;
    surn;
    FS(str) {
        return str.slice(0, 1).toUpperCase() + str.slice(1);
    };
    in() {
        return this.name[0].toUpperCase() + "." + this.surn[0].toUpperCase();
    };
    s() {
        return this.name + ' ' + this.surn
    };
}
let student = new Student;
student.name = "Аркадий"
student.surn = "Козулькин"
console.log("Имя: " + student.FS(student.name))
console.log("Инициалы: " + student.in())
console.log(student.s())


