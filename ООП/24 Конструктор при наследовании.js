class User {
    constructor(name, surn) {
        this.name = name;
        this.surn = surn;
    }
    getName() {
        return this.name;
    }
    getSurn() {
        return this.surn;
    }
}
class Employee extends User {
    #salary;
    #age;

    constructor(name, salary, age) {
        this.name = name;
        this.#salary = salary;
        this.#age = age;
    }
    setAge(age) {
        this.#age = age;
    }
    setSalary(salary) {
        this.#salary = salary;
    }
    getAge() {
        return this.#age;
    }
    getSalary() {
        return this.#salary;
    }
}