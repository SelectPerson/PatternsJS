class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    responsibilities() {

    }
    work() {
        return `${this.name} to do ${this.responsibilities()}`;
    }
    getPaid() {
        return `${this.name} getting salary: ${this.salary}`;
    }
}

class Developer extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    responsibilities() {
        return `Creating the programms`;
    }
}

class Tester extends Employee {
    constructor(name, salary) {
        super(name, salary);
    }
    responsibilities() {
        return `Proccess of the Testing`;
    }
}

const dev = new Developer('Vova', 10000);
console.log(dev.getPaid());
console.log(dev.work());

const tester = new Developer('Sasha', 6000);
console.log(tester.getPaid());
console.log(tester.work());
