"use strict";
class Animal {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`${this.name} is walking.`);
    }
}
class Cat extends Animal {
    constructor(name, breed) {
        super(name);
        this.breed = breed;
    }
}
const cat = new Cat("Kitty", "England");
console.log(cat);
cat.walk();
//# sourceMappingURL=index.js.map