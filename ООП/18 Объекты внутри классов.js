class Employee {
    constructor(name, poon, department) {
        this.name = name;
        this.position = position;
        this.department = department;
    }
}
class Position {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
class Department {
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}
let position = new Position('Сварщик', 45);
let department = new Department('АХО', 'ул. Козлёнская д. 95, кв. 3');
let employee = new Employee('Аркадий', position, department);
console.log(employee.name);
console.log(employee.position.name); 
console.log(employee.department.name);
