/**
 * ==============================
 * LESSON: Objects
 * ==============================
 * 1. Khai báo Object Tường minh.
 * ==============================
 */

let employee: { id: number; name: string; isEmployed: boolean } = {
  id: 1,
  name: "Harry",
  isEmployed: true,
};

console.log(employee);

// 2. Sử dụng interface để định nghĩa 1 OBJ:
interface Person {
  name: string;
  age?: number;
  isEmployed: boolean;
}

// let person: Person = {
//   name: "Potter",
//   // age: 18,
//   isEmployed: true,
// };

// 3. Type Alias để đ/n 1 obj:
type Car = {
  brand: string;
  model: string;
  year: number;
};

let myCar: Car = {
  brand: "Toyota",
  model: "Camry",
  year: 2025,
};

// 2.1> Readonly Property:
interface Config {
  readonly apiUrl: string;
  timeout: number;
}

let config: Config = { apiUrl: "https://localhost:9999/...", timeout: 5000 };
console.log(config);
// config.apiUrl = "...";

// 2.2> Index Signature (dynamic properties)
interface Dictionary {
  [key: string]: string; // NOTE: chấp nhận mọi props miễn là có kiểu string
}

let translation: Dictionary = {
  hello: "Xin chào",
  goodbye: "Tạm biệt",
  "go home!": "Đi về nhà!",
};

console.log(translation.hello); // dot notation
console.log(translation["goodbye"]); // bracket notation
console.log(translation["go home!"]);

// 2.3> Object methods trong typescript:
interface Calculator {
  add: (a: number, b: number) => number;
  subtract: (a: number, b: number) => number;
}

let calc: Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => {
    return a - b;
  },
};

console.log(calc.add(5, 3));
console.log(calc.subtract(10, 4));

// 2.4> inheritance interface:
interface Animal {
  name: string;
  age: number;
}

interface Cat extends Animal {
  breed: string;
}

let myCat: Cat = {
  breed: "England",
  name: "Dog",
  age: 4,
};

// Generic Type
// synctax Pascal: "IAmHarry"
// camelCase: "myCat"
interface ApiResponse<GenericType> {
  status: string;
  data: GenericType;
}
let userResponse: ApiResponse<{ id: number; name: string }> = {
  status: "success",
  data: { id: 1, name: "CatWoman" },
};
console.log(userResponse);

// 4. Sử dụng Class trong định nghĩa Obj:
class Person {
  myName: string;
  myAge: number;

  constructor(name: string, age: number) {
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

// tính chất đóng gói với private và public:
class BankAccount {
  private balance: number;
  constructor(initialValue: number) {
    this.balance = initialValue;
  }

  deposit(amount: number) {
    this.balance += amount;
  }
  getBalance() {
    return this.balance;
  }
}
let account = new BankAccount(50_000);
account.deposit(2_000_000);

// account.balance = 0;
console.log(account.getBalance()); // 2_050_000
