class Employee {
    #name;
    #salary;
    #age;
    constructor(name, salary, age) {
        this.#name = name;
        this.#salary = salary;
        this.#age = age;
    }
    S() {
        return `${this.#name}, ${this.#salary}, ${this.#age}`
    }
}
let user = new Employee("Аркадий", 12000, 45)
console.log(user.S())