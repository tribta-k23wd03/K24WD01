"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
class Shape {
    compute() {
        return 0;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    compute() {
        return this.width * this.height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    compute() {
        return parseFloat((Math.PI * this.radius ** 2).toFixed(2));
    }
}
const shapes = [new Rectangle(5, 10), new Circle(3)];
shapes.forEach((s) => console.log(s.compute()));
const employeeId = "id";
const employeeName = "name";
const employeeAddress = "address";
const arrayMethod = "concat";
const userObj = {
    userID: 1,
    username: "ABC",
};
const checkValidKey = "username";
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergeArray = [...arr1, ...arr2];
console.log(mergeArray);
const copyArr = [...mergeArray];
console.log(copyArr);
const obj1 = { name: "Alice", age: 18 };
const obj2 = { country: "USA" };
const mergeObj = Object.assign(Object.assign({}, obj1), obj2);
console.log(mergeObj);
function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num);
}
console.log(sum(1, 2, 3, 4, 5));
const user = { id: 1, name: "ABC" };
const details = __rest(user, []);
console.log(user);
console.log(details);
//# sourceMappingURL=index.js.map