"use strict";
function sum(a, b) {
    return a + b;
}
sum(1, 1.1);
var rate;
(function (rate) {
    rate[rate["rate1"] = 1.2] = "rate1";
    rate[rate["rate2"] = 2] = "rate2";
})(rate || (rate = {}));
let increase = rate.rate1;
function calculateTax(income) {
    if (income < 50000)
        return income * rate.rate1;
    return income * rate.rate2;
}
console.log(calculateTax(50001));
//# sourceMappingURL=index.js.map