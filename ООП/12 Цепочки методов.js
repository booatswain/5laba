class Employee {
    #name;
    #salary;
    #age;

    setName(name) {
        this.#name = name;
        return this;
    }
    setSalary(salary) {
        this.#salary = salary;
        return this;
    }
    setAge(age) {
        if (age > 0 && age <= 120) {
            this.#age = age;
        }
        else {
            throw new Error('Врун')
        }
    }
    getName() {
        return this.#name;
    }
    getSalary() {
        return this.#salary + "$";
    }
    getAge() {
        return this.#age;
    }
}

let user = new Employee;
user.setName('Аркадий').setSalary(12000)
console.log(user.getName());
console.log(user.getSalary());