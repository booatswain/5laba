class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    Name() {
        return this.name
    }
    Salary() {
        return this.salary
    }
    UpSalary() {
        return this.salary / 100 * 10 + this.salary
    }
}
let user = new Employee("Аркадий", 12000)
console.log(user.UpSalary())