"use strict";
let employee = {
    id: 1,
    name: "Harry",
    isEmployed: true,
};
console.log(employee);
let myCar = {
    brand: "Toyota",
    model: "Camry",
    year: 2025,
};
let config = { apiUrl: "https://localhost:9999/...", timeout: 5000 };
console.log(config);
let translation = {
    hello: "Xin chào",
    goodbye: "Tạm biệt",
    "go home!": "Đi về nhà!",
};
console.log(translation.hello);
console.log(translation["goodbye"]);
console.log(translation["go home!"]);
let calc = {
    add: (a, b) => a + b,
    subtract: (a, b) => {
        return a - b;
    },
};
console.log(calc.add(5, 3));
console.log(calc.subtract(10, 4));
let myCat = {
    breed: "England",
    name: "Dog",
    age: 4,
};
let userResponse = {
    status: "success",
    data: { id: 1, name: "CatWoman" },
};
console.log(userResponse);
class Person {
    constructor(name, age) {
        this.myName = name;
        this.myAge = age;
    }
    greet() {
        return `Hello, my name is ${this.myName}`;
    }
}
let person1 = new Person("John", 30);
console.log(person1);
console.log(person1.greet());
class BankAccount {
    constructor(initialValue) {
        this.balance = initialValue;
    }
    deposit(amount) {
        this.balance += amount;
    }
    getBalance() {
        return this.balance;
    }
}
let account = new BankAccount(50000);
account.deposit(2000000);
account.balance = 0;
console.log(account.getBalance());
//# sourceMappingURL=index.js.map