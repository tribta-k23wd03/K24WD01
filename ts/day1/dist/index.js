"use strict";
function greet(name) {
    if (name)
        console.log(name.toUpperCase());
    console.log("name is null or undefined");
}
greet(null);
greet(undefined);
function printUserInfo(user) {
    console.log(`User ID: ${user.id}`);
    console.log(`User name: ${user.name}`);
    const msg = user.email !== null ? user.email : "Email not provided";
    console.log(`User email: ${msg}`);
    console.log(`User phone: ${user.phone}`);
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
//# sourceMappingURL=index.js.map