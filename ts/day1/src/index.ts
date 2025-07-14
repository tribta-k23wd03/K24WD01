/**
 * ==============================
 * LESSON: type aliases
 * ==============================
 */
let employee1: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Gabriel",
  retire: (date: Date) => {
    console.log(date);
  },
};

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let employee: Employee = {
  id: 1,
  name: "Gabriel",
  retire: (date: Date) => {
    console.log(date);
  },
};

// EXCERCISE: 1
type Person = {
  name: string;
  age: number;
};

const person1: Person = {
  name: "Donald Trump",
  age: 85,
};

console.log(person1);

// NOTE: Union Type
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    return weight * 2.2;
  }
  return parseInt(weight) * 2.2;
}

console.log(kgToLbs(65)); // 143
console.log(kgToLbs("65")); // 143

// EXCERCISE: 2
type Status = "success" | "error" | "pending";

let responseStatus: Status = "pending";

// NOTE: Intersection Type &: combine 2 type aliases
// let weight: number & string;
// weight = 1;

type Draggable = {
  drag: () => void;
};

type Resized = {
  resize: () => void;
};

type UIWidget = Draggable & Resized;

let textBox: UIWidget = {
  drag: () => {
    console.log("Dragging Element");
  },
  resize: () => {
    console.log("Resize Element");
  },
};

// EXCERCISE:3
// EmployeeDeveloper combines Employee name, age and Developer skills with &, and prints to console

type Employee1 = {
  myName: string;
  myAge: number;
};
type Developer1 = {
  skills: string[];
};
type Employee1Developer1 = Employee1 & Developer1;

const dev: Employee1Developer1 = {
  myName: "Harry",
  myAge: 18,
  skills: ["js", "ts", "c"],
};
console.log(dev);

// NOTE: Literal Type (yêu cầu khai báo chính xác giá trị)
type Quantity = 50 | 100; // type aliases + unions + inital value = Literal Type
let quantity: Quantity = 100;

console.log("Selected Quantity:" + quantity);
console.log("Selected Quantity:", quantity);
console.log(`"Selected Quantity: " ${quantity}`);

type Metric = "cm" | "inch";
let unit: Metric = "cm";

console.log(`"Selected Metric: " ${unit}`); // cm

// EXCERCISE:4
type OrderStatus = "pending" | "shipped" | "delivered" | "canceled";
type PaymentMethod = "credit_card" | "paypal" | "bank_transfer";

interface Order {
  id: number;
  status: OrderStatus;
  payment?: PaymentMethod;
}

let myOrder: Order = {
  id: 1,
  status: "pending",
  payment: "credit_card",
};

console.log("Initialize Order: ", myOrder);

myOrder.status = "shipped";
console.log("Initialize Order: ", myOrder);

function updateOrderStatus(o: Order, newStatus: OrderStatus) {
  o.status = newStatus;
  console.log(`Order ${o.id} status updated to: ${o.status}`);
}
updateOrderStatus(myOrder, "canceled");
