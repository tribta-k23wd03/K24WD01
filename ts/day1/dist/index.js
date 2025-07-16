"use strict";
var _a;
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    console.log("name is null or undefined");
}
greet(null);
greet(undefined);
function printUserInfo(user) {
    var _a;
    console.log(`User ID: ${user.id}`);
    console.log(`User name: ${user.name}`);
    const msg = user.email !== null ? user.email : "Email not provided";
    console.log(`User email: ${msg}`);
    console.log(`User phone: ${(_a = user.phone) !== null && _a !== void 0 ? _a : "Phone not provided"}`);
}
const user1 = {
    id: 1,
    name: "Jason",
    email: "jason@gmail.com",
    phone: "0123456789",
};
const user2 = {
    id: 2,
    name: "Michael",
    email: null,
};
const user3 = {
    id: 3,
    name: "Potter",
    email: "potter@gmail.com",
};
printUserInfo(user1);
printUserInfo(user2);
printUserInfo(user3);
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(1);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let speed = null;
let ride = {
    speed: speed !== null && speed !== void 0 ? speed : 60,
};
console.log(ride);
function getSetting(userSetting, defaultSetting) {
    return userSetting !== null && userSetting !== void 0 ? userSetting : defaultSetting;
}
console.log(getSetting(null, "Dark Mode"));
console.log(getSetting(undefined, 50));
console.log(getSetting("", "#000000"));
console.log(getSetting(0, 100));
console.log(getSetting(false, true));
function getUser(data) {
    return data;
}
const rawData = {
    id: 1,
    name: null,
    email: "john@gmail.com",
};
const user = getUser(rawData);
console.log(user);
function isUser(obj) {
    return obj && typeof obj.id === "number";
}
console.log(isUser(user) ? "Valid User" : "Invalid User");
//# sourceMappingURL=index.js.map