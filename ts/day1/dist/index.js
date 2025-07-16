"use strict";
class Person {
    constructor(n, a) {
        this.name = n;
        this.age = a;
    }
    introduce() {
        console.log(`Hi, my name is ${this.name} and my age is: ${this.age}`);
    }
}
const person = new Person("Michale", 18);
person.name;
person.age;
person.introduce();
class Person2 {
    constructor(n = "John", a = 18) {
        this.name = n;
        this.age = a;
    }
    introduce() {
        console.log(`Hi, my name is ${this.name} and my age is: ${this.age}`);
    }
}
const person2 = new Person2();
class Person3 {
    constructor(myName, myAge) {
        this.myName = myName;
        this.myAge = myAge;
    }
    introduce() {
        console.log(`Hi, my name is ${this.myName} and my age is: ${this.myAge}`);
    }
}
const person3 = new Person3("Harry", 18);
class Car {
    constructor(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    getModel() {
        return this.model;
    }
    getYear() {
        return this.year;
    }
    setYear() {
        return (this.year = new Date());
    }
}
const car = new Car("Toyota", "Camry", new Date());
console.log(car.brand);
console.log(car.getModel());
car.setYear();
console.log(car.getYear());
//# sourceMappingURL=index.js.map