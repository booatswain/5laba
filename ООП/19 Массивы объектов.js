class Employee {
    #name;
    #salary;

    constructor(name, salary) {
        this.#name = name;
        this.#salary = salary;
    }
    getName() {
        return this.#name;
    }
    getSalary() {
        return this.#salary;
    }
}
let employees = [
	new Employee("Аркадий", 12000), 
	new Employee("Эдик", 20000)];
for (let employee of employees) {
	console.log(employee.getName(), employee.getSalary());
	}