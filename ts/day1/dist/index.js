"use strict";
let employee1 = {
    id: 1,
    name: "Gabriel",
    retire: (date) => {
        console.log(date);
    },
};
let employee = {
    id: 1,
    name: "Gabriel",
    retire: (date) => {
        console.log(date);
    },
};
const person1 = {
    name: "Donald Trump",
    age: 85,
};
console.log(person1);
function kgToLbs(weight) {
    if (typeof weight === "number") {
        return weight * 2.2;
    }
    return parseInt(weight) * 2.2;
}
console.log(kgToLbs(65));
console.log(kgToLbs("65"));
let responseStatus = "pending";
let textBox = {
    drag: () => {
        console.log("Dragging Element");
    },
    resize: () => {
        console.log("Resize Element");
    },
};
const dev = {
    myName: "Harry",
    myAge: 18,
    skills: ["js", "ts", "c"],
};
console.log(dev);
let quantity = 100;
console.log("Selected Quantity:" + quantity);
console.log("Selected Quantity:", quantity);
console.log(`"Selected Quantity: " ${quantity}`);
let unit = "cm";
console.log(`"Selected Metric: " ${unit}`);
let myOrder = {
    id: 1,
    status: "pending",
    payment: "credit_card",
};
console.log("Initialize Order: ", myOrder);
myOrder.status = "shipped";
console.log("Initialize Order: ", myOrder);
function updateOrderStatus(o, newStatus) {
    o.status = newStatus;
    console.log(`Order ${o.id} status updated to: ${o.status}`);
}
updateOrderStatus(myOrder, "canceled");
//# sourceMappingURL=index.js.map