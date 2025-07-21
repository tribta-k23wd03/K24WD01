"use strict";
function getUserInput() {
    return Math.random() > 0.5 ? "hello" : 42;
}
const input = getUserInput();
if (typeof input === "string") {
    console.log("String input:", input.toUpperCase());
}
else {
    console.log("Number input:", input + 10);
}
//# sourceMappingURL=index.js.map