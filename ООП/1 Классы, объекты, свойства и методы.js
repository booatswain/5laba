class Employee {
    name;
    age;
    salary;
    test(name,salary) {
		return name + ' ' + salary;
	}
    Name() {
        return this.name
    }
    Salary() {
        return this.salary
    }
}
let user = new Employee;
let user2 = new Employee;
user.name = 'Альберт';
user.salary = '12000';
user2.name = 'Эдик';
user2.salary = '20000';
console.log(user)
console.log(user2)
console.log(user.test(user.name, user.salary))
console.log("Имя: " + user.Name()+ "\n", "З/п: " + user.Salary())
console.log("Имя: " + user2.Name()+ "\n", "З/п: " + user2.Salary())



