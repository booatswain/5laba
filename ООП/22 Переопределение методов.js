class Employee {
    #name;
    #salary;
    #age;

    constructor(name, salary, age) {
        this.#name = name;
        this.#salary = salary;
        this.#age = age;
    }
    getAge() {
        return this.#age;
    }
    setAge(age) {
        if (age > 18 && age < 65) this.#age = age;
    }
}